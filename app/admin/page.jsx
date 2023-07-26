"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Admin() {
  const { data: session, status: status } = useSession();

  if (session) {
    return (
      <div className="text-white">
        <>
          <p className="text-center pt-10 dark:text-white">
            Welcome {session?.user?.name}
          </p>
          <div className="dark:bg-slate-800 flex h-full min-h-screen">
            <div className="pl-5 dark:bg-slate-700 space-y-5 w-full h-full min-h-screen">
              <div className="">pp</div>
            </div>
          </div>
        </>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default Admin;
