"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  console.log(user?.fullName);
  return (
    <header className="border-b sticky top-0 flex justify-between items-center p-4 gap-4 h-16">
      <Link href="/" className="text-xl font-semibold">
        Codab
      </Link>
      <div className="flex gap-6">
        <SignedOut>
          <Link href="/auth/sign-in">
            <Button className="cursor-pointer">Sign In</Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button variant="secondary" className="cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </SignedOut>
        <SignedIn>
          {/* <span>{user?.fullName}</span> */}
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
