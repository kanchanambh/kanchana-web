"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import AdminNav from "@components/admin/AdminNav";
import { useState } from "react";

export default function Layout({ children }) {
  const { data: session } = useSession();

  return (
    <div className="dark:bg-slate-900 min-h-screen ">
      <div className=" md:hidden flex items-center p-4"></div>
      <div className="flex">
        <AdminNav />
        <div className="flex-grow bg-slate-800 h-full min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
