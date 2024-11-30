import React from "react";

async function fetchUserDetails(currentUserId) {
  const response = await fetch(`https://dummyjson.com/users/${currentUserId}`);
  const data = await response.json();
  return data;
}
const UserDetails = async ({ params }) => {
  const { details } = params;
  const UserDetails = await fetchUserDetails(details);

  return (
    <div className="p-10">
      <h1>UserDetails {details} page</h1>
      <p>Name: {UserDetails.firstName}</p>
      <p>Email: {UserDetails.email}</p>
      <p>
        Address: {UserDetails.address.street}, {UserDetails.address.city},{" "}
        {UserDetails.address.zipcode}
      </p>
      <p>Phone: {UserDetails.phone}</p>
    </div>
  );
};

export default UserDetails;
