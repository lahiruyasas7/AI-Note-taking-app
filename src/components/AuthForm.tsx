"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { loginAction, signupAction } from "@/actions/users";
import { toast } from "sonner";

type Props = {
  types: "login" | "signup";
};

function AuthForm({ types }: Props) {
  const isLoginForm = types === "login";

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errorMessage;
      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
      } else {
        errorMessage = (await signupAction(email, password)).errorMessage;
      }
      if (!errorMessage) {
        //router.replace("/");
      } else {
        toast.error(errorMessage);
      }
    });
  };
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <CardFooter className="flex flex-col gap-6">
          <Button className="w-full">
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : isLoginForm ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </Button>
          <p className="text-xs">
            {isLoginForm
              ? "Don't have an account yet?"
              : "Already have an account?"}{" "}
            <Link
              href={isLoginForm ? "/sign-up" : "/login"}
              className={`text-blue-500 underline ${
                isPending ? "pointer-events-none opacity-50" : ""
              }`}
            >
              {isLoginForm ? "Sign Up" : "Login"}
            </Link>
          </p>
        </CardFooter>
      </CardContent>
    </form>
  );
}

export default AuthForm;
