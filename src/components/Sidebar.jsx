import React from "react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const users = [
    { name: "Umair", username: "umair123" },
    { name: "Akram", username: "akram100" },
    { name: "Danish", username: "dk45" },
    { name: "Mujahid", username: "mh22" },
  ];
  return (
    <aside className="w-[250px] border-r p-4 flex flex-col gap-2 justify-between">
      <div className="h-[75vh] overflow-y-auto flex flex-col gap-2 custom-scrollbar">
        {users.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border py-2 px-2 rounded"
          >
            <div className="flex flex-col leading-4 ">
              <span className="font-semibold">{item.name}</span>
              <span className="italic text-sm font-light">@{item.username}</span>
            </div>
            <Button variant="link" className="p-0">
              Remove
            </Button>
          </div>
        ))}
      </div>

      <Button className="cursor-pointer ">Add User</Button>
    </aside>
  );
};

export default Sidebar;
