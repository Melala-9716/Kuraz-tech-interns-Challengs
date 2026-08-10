import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">
      <h2 className="text-xl font-bold text-gray-900">
        {user.name}
      </h2>

      <p className="text-gray-500">@{user.username}</p>

      <div className="mt-4">
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-gray-800">{user.email}</p>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-500">Location</p>
        <p className="text-gray-800">{user.address.city}</p>
      </div>

      <Link
        href={`/users/${user.id}`}
        className="mt-5 inline-block text-blue-600 font-medium hover:underline"
      >
        View Profile →
      </Link>
    </div>
  );
}