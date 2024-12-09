"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClearData() {
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={() => {
        localStorage.clear()
        alert("Data cleared, press ok to continue");
        window.location.href = "/";
      }}
    >
      <Trash2 className="h-4 w-4 text-red-500" />
    </Button>
  );
}
