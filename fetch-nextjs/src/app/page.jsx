import Header from "./components/header";
import UserList from "./components/userList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <h2 className="ml-[10px] ms:ml-[70px]">Welcome to the UserHub</h2>

        <p  className="ml-[10px] ms:ml-[100px]">Explore our users and their information.</p>

        <Suspense fallback={<p>Loading Users...</p>}>
          <UserList />
        </Suspense>
      </section>
    </main>
  );
}