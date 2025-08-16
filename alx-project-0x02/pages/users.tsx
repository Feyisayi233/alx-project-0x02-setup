import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import React from "react";

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

interface UsersPageProps {
  users: ApiUser[];
}

const UsersPage = ({ users }: UsersPageProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-8">
    <Header />
    <h1 className="text-3xl font-bold mb-4">Users Page</h1>
    {users.length === 0 ? (
      <p>No users found.</p>
    ) : (
      users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))
    )}
  </div>
);

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}

export default UsersPage;
