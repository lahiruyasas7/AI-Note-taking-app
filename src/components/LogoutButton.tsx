"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Toaster } from "./ui/sonner";
import { logOutAction } from "@/actions/users";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    const { errorMessage }: any = await logOutAction();

    if (!errorMessage) {
      router.push(`/?toastType=logOut`);
    } else {
      <Toaster />;
    }
  };
  return (
    <Button onClick={handleLogout}>{loading ? <Loader2 /> : "Log out"}</Button>
  );
};

export default LogoutButton;
