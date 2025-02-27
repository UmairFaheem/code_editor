import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
      <h6 className="border px-6 py-2 rounded-full font-thin">
        Live Code Collaborator
      </h6>
      <h1 className="text-6xl font-semibold">
        <span className="font-thin">Welcome to </span>Codab
      </h1>
      <p className="font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        amet expedita provident corrupti perferendis ea?
      </p>
      <Link href="/editor">
        <Button className="mt-2 text-lg font-normal py-8 px-10 rounded-full cursor-pointer">
          Use Now
        </Button>
      </Link>
    </div>
  );
};

export default page;
