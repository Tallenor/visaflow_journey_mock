"use client";

import { useState } from "react";

export function UserSection() {
  const [user] = useState(() => {
    const user = typeof window !== "undefined" && localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return {
      email: "",
      password: "",
    };
  });
  return <div suppressHydrationWarning>Current user: {user.email}</div>;
}
