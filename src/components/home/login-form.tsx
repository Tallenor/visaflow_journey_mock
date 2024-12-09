"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LoginForm() {
  const [form, setForm] = useState({
    email: "johndoe@email.com",
    password: "password",
  });
  const [user] = useState(() => {
    const user = typeof window !== "undefined" && localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return {
      email: "",
    };
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Login successful, press ok to continue");
    window.location.href = "/";
    console.log(form);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            defaultValue={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            defaultValue={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>

      {user.email && <Over30 />}
    </div>
  );
}

function Over30() {
  const [over30, setOver30] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValueChange = (e: any) => {
  setOver30(e === "yes" ? true : false);
  }

  useEffect(() => {
    const user = typeof window !== "undefined" && localStorage.getItem("user");
    if (user) {
      const u = JSON.parse(user)
      u.over30 = over30
      localStorage.setItem("user", JSON.stringify(u));
    };
    
  }, [over30]);
  return (
    <>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Are you over 30?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
      {over30 && <Button>Continue</Button>}
    </>
  );
}
