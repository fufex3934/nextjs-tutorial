"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const ClientDataFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id} className="mt-5 cursor-pointer">
                <Link href={`/server-data-fetch/${user.id}`}>
                  {user.firstName}
                </Link>
              </li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default ClientDataFetch;
