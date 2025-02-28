"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, redirect } from "next/navigation";

const Room = () => {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();

  console.log("from '/room'");
  console.log("userId:", userId);
  console.log("isLoaded:", isLoaded);
  function handleCreateRoom() {
    console.log("Creating....");
    router.push("/editor/as541a46asd5");
  }

  function handleJoinRoom() {
    console.log("Joining....");
    router.push("/editor/as541a46asd5");
  }

  if (isLoaded && !userId) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="p-4 flex-1 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8 w-[80%]">
        <Dialog>
          <DialogTrigger className="border p-4 rounded-md  flex items-center justify-center cursor-pointer h-60 w-full text-xl font-semibold">
            Create Room
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Room</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <label htmlFor="name">Enter Room Name</label>
              <Input id="name" type="text" placeholder="e.g. Umair's Room" />
              <label htmlFor="passcode" className="mt-2">
                Enter Room Passcode
              </label>
              <Input id="passcode" type="password" placeholder="*******" />
              <Button
                className="mt-2 cursor-pointer w-full"
                onClick={handleCreateRoom}
              >
                Create Room
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger className="border p-4 rounded-md  flex items-center justify-center cursor-pointer h-60 w-full text-xl font-semibold">
            Join Room
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Join Exisiting Room</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <label htmlFor="name">Paste Room ID</label>
              <Input id="name" type="text" placeholder="e.g. AC2254asd57" />
              <label htmlFor="passcode" className="mt-2">
                Type Room Passcode
              </label>
              <Input id="passcode" type="password" placeholder="*******" />
              <Button
                className="mt-2 cursor-pointer w-full"
                onClick={handleJoinRoom}
              >
                Join Room
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Room;
