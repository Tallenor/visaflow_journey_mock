import { ModeToggle } from "@/components/toggle-theme";
import { ClearData } from "@/components/home/clear-data";
import { UserSection } from "@/components/home/user-section";
import { LoginForm } from "@/components/home/login-form";

export default function Home() {
  return (
      <main className="" suppressHydrationWarning>
        <div className="top-2 right-2 fixed space-x-2">
          <ModeToggle />
          <ClearData />
        </div>  
        <UserSection />
        <LoginForm />
      </main>
  );
}
