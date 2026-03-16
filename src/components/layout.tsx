import { Outlet } from "react-router";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
