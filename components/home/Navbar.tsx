"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Navbar = () => {
  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <nav className="flex items-center justify-between">
      <Link href="/home" className="flex items-center gap-2">
        <Brain className={"w-8 h-8 text-primary"} />
        <h2 className="text-primary-100">PrepNow</h2>
      </Link>
      <Button onClick={handleLogOut}>Log Out</Button>
    </nav>
  );
};

export default Navbar;
