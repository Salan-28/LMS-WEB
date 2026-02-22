import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { User as UserIcon } from "lucide-react";

// generate a small random placeholder user when no real user exists
function randomUser() {
  const names = [
    "UneeVen",

  ];
  const name = names[Math.floor(Math.random() * names.length)];
  const email = name.toLowerCase().replace(/\s+/g, ".") + "@example.com";
  return { name, email };
}

export default function Profile() {
  const { user, logout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [pwCurrent, setPwCurrent] = useState("");
  const [pwNew, setPwNew] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      setName(user.name || (user.email ? user.email.split("@")[0] : ""));
    } else {
      const r = randomUser();
      setName(r.name);
      setEmail(r.email);
    }
  }, [user]);

  useEffect(() => {
    if (!avatar) return setAvatarPreview(null);
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(avatar);
  }, [avatar]);

  function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (file) setAvatar(file);
  }

  function handleSave() {
    if (!email || !name) {
      setMessage("Name and email are required.");
      return;
    }
    setEditing(false);
    setMessage("Profile updated.");
    setTimeout(() => setMessage(""), 3000);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    if (!pwCurrent || !pwNew) {
      setMessage("Please fill password fields.");
      return;
    }
    if (pwNew !== pwConfirm) {
      setMessage("New passwords do not match.");
      return;
    }
    setShowPasswordModal(false);
    setPwCurrent("");
    setPwNew("");
    setPwConfirm("");
    setMessage("Password changed.");
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-full">
            <UserIcon size={28} className="text-gray-700" />
          </div>
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => logout && logout()}
            className="bg-red-500 text-white px-3 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">{message}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white p-6 rounded-xl shadow flex flex-col items-center">
          <div className="w-32 h-32 mb-4">
            <img
              src={avatarPreview || "https://ui-avatars.com/api/?size=128&name=" + encodeURIComponent(name)}
              alt="avatar"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          <label className="text-sm text-gray-600 mb-2">Upload avatar</label>
          <input type="file" accept="image/*" onChange={handleAvatarChange} />

          <div className="mt-6 text-center">
            <div className="text-sm text-gray-500">Role</div>
            <div className="text-lg font-medium capitalize">{user?.role || "—"}</div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Account Details</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setEditing((s) => !s)}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                {editing ? "Cancel" : "Edit"}
              </button>
              {editing && (
                <button onClick={handleSave} className="px-3 py-1 bg-green-600 text-white rounded">
                  Save
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!editing}
                className={`w-full border rounded px-3 py-2 ${editing ? "" : "bg-gray-100"}`}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!editing}
                className={`w-full border rounded px-3 py-2 ${editing ? "" : "bg-gray-100"}`}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Member since</label>
              <div className="text-gray-700">2024</div>
            </div>

            <div className="pt-4 border-t">
              <button
                onClick={() => setShowPasswordModal(true)}
                className="px-4 py-2 bg-yellow-500 text-white rounded"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <form
            onSubmit={handlePasswordChange}
            className="bg-white p-6 rounded shadow max-w-md w-full"
          >
            <h3 className="text-lg font-semibold mb-4">Change Password</h3>
            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-1">Current Password</label>
              <input
                type="password"
                value={pwCurrent}
                onChange={(e) => setPwCurrent(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-1">New Password</label>
              <input
                type="password"
                value={pwNew}
                onChange={(e) => setPwNew(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
              <input
                type="password"
                value={pwConfirm}
                onChange={(e) => setPwConfirm(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowPasswordModal(false)} className="px-3 py-1 rounded border">
                Cancel
              </button>
              <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
