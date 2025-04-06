"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Toaster } from "./ui/sonner";

const LogoutButton = () => {

  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
    }, 1000);

    const errorMessage = "Error in Logout";

    if (errorMessage){
        <Toaster/>
    }
  };
  return <Button onClick={handleLogout}>{loading ? <Loader2 /> : "Log out"}</Button>;
};

export default LogoutButton;
