import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b sticky top-0 flex justify-between items-center p-4 gap-4 h-16">
      <Link href="/" className="text-xl font-semibold">Codab</Link>
      <div className="flex gap-6">
        <SignedOut>
          <Link href="/auth/sign-in" >
            <Button className="cursor-pointer">Sign In</Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button variant="secondary" className="cursor-pointer">Sign Up</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
