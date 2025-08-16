import React from "react";
import { type UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-md">
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p className="text-gray-700 mb-2">Email: {email}</p>
    <div className="text-gray-600 text-sm">
      <div>Address:</div>
      <div>
        {address.street}, {address.suite}
      </div>
      <div>
        {address.city}, {address.zipcode}
      </div>
    </div>
  </div>
);

export default UserCard;
