import Link from "next/link";
async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
}
const ServerDataFetch = async () => {
  const listofUsers = await fetchUsers();
  console.log(listofUsers);
  return (
    <div>
      <ul>
        {listofUsers && listofUsers.length > 0
          ? listofUsers.map((user) => (
              <li key={user.firstName} className="mt-5 cursor-pointer">
                <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ServerDataFetch;
