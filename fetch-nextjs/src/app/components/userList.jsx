import UserCard from "./userCard";
export default async function UserList(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await response.json();
    console.log(users);

    return(
        <>
        <div className="pt-[50px] px-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-red-500">
          {users.map((user) => (
  <UserCard key={user.id} user={user} />
))}
        </div>
        </>
    )
}