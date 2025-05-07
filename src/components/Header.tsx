import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/auth/server";

const Header = async () => {
  const user = await getUser();
  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href="/" className="flex items-end gap-2">
        <Image
          src="/goatius.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          Goat <span>Notes</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        {!user ? (
          <LogoutButton/>
        ) : (
          <>
            {" "}
            <Button asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
