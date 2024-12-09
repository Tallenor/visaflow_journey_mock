"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import useLocalStorageUser from "@/lib/hooks/user-hook";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LoginForm() {
  const { user, updateUser, setUser } = useLocalStorageUser()
  const [form, setForm] = useState({
    email: "johndoe@email.com",
    password: "password",
  });
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser(form);
    alert("Login successful, press ok to continue");
    window.location.href = "/";
    console.log(form);
  };

  useEffect(() => {
    console.log(form);
    updateUser(form);
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
  const { user, updateUser } = useLocalStorageUser()
  const [over30, setOver30] = useState(user.over30 ? true : false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValueChange = (e: any) => {
    setOver30(e === "yes" ? true : false);
  };

  useEffect(() => {
    updateUser({ over30 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [over30]);
  return (
    <>
      <Select onValueChange={handleValueChange} defaultValue={over30 ? "yes" : "no"}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Are you over 30?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
      {over30 && (
        <>
          <WantsResidencePermit />
        </>
      )}
    </>
  );
}

function WantsResidencePermit() {
  const { user, updateUser } = useLocalStorageUser()
  const [wantsResidencePermit, setWantsResidencePermit] = useState(user.wantsResidencePermit ? true : false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValueChange = (e: any) => {
    setWantsResidencePermit(e === "yes" ? true : false);
  };

  useEffect(() => {
    updateUser({ wantsResidencePermit });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wantsResidencePermit]);
  
  return (
    <>
      <Select onValueChange={handleValueChange} defaultValue={wantsResidencePermit ? "yes" : "no"}>
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="Do want to apply for a residence permit?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>
      {wantsResidencePermit ? (
        <>
          <p>You have indicated that you want to apply for a <strong>Residence Permit</strong>, click below to continue</p>
          <Button onClick={() => window.location.href = "/residence-permit-flow"}>Continue to Residence Permit</Button>
        </>
      ): (
        <>
          <p>You have indicated that you want to apply for a <strong>Visa</strong>, click below to continue</p>
          <Button onClick={() => window.location.href = "/visa-flow"}>Continue to Visa Application</Button>
        </>
      )}
    </>
  );
}
