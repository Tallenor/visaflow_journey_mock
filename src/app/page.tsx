import Image from "next/image";
import { ModeToggle } from "@/components/toggle-theme";


export default function Home() {
  return (
      <main className="">
        <div className="top-2 right-2 fixed">
          <ModeToggle />
        </div>        
      </main>
  );
}
