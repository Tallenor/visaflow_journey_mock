"use client";

import useLocalStorageUser from "@/lib/hooks/user-hook";

export function UserSection() {
  const { user } = useLocalStorageUser();
  return <div suppressHydrationWarning>Current user: {user.email}</div>;
}
