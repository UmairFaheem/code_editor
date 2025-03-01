"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Sidebar = ({users, setUsers}) => {
  const router = useRouter();
  const { user } = useUser();
  console.log(users);
  
  console.log(user);
  console.log(user?.emailAddresses[0]?.emailAddress);
  
  function handleExit() {
    router.replace("/");
  }
  return (
    <aside className="w-[250px] border-r p-4 flex flex-col gap-2 justify-between">
      <div className="h-[75vh] overflow-y-auto flex flex-col gap-2 custom-scrollbar">
        <div className="flex justify-between items-center border py-2 px-2 rounded">
          <div className="flex flex-col leading-4 ">
            <span className="font-semibold">{user?.fullName}</span>
            <span className="italic text-[0.8rem] font-light">Host</span>
          </div>
          <Button variant="link" className="p-0">
            Remove
          </Button>
        </div>
        {users.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border py-2 px-2 rounded"
          >
            <div className="flex flex-col leading-4 ">
              <span className="font-semibold">{item.fullName}</span>
              <span className="italic text-[0.7rem] font-light">
                {item.socketId}
              </span>
            </div>
            <Button variant="link" className="p-0">
              Remove
            </Button>
          </div>
        ))}
      </div>

      <Button
        className="cursor-pointer"
        variant="destructive"
        onClick={handleExit}
      >
        Exit Room
      </Button>
    </aside>
  );
};

export default Sidebar;
