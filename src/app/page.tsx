"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      await authClient.signUp.email({
        email,
        name,
        password,
      }, {
        onError: () => {
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          window.alert("User created successfully");
        },
      });
    } catch (error) {
      console.error("Sign up error:", error);
      window.alert("Something went wrong");
    }
  }

  if(session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Connecté en tant que: {session.user.email}</p>
        <Button onClick={() => authClient.signOut()}>
          Sign out
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <Button onClick={onSubmit}>
          Create User
        </Button>
      </div>
    </div>
  )
}