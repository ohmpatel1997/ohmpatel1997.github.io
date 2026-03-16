import { Link, useLocation } from "react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Clients", path: "/clients" },
  { label: "Projects", path: "/projects" },
  { label: "Speaking", path: "/speaking" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <Link
            to="/"
            className="text-sm font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            ohm.
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-1.5 text-[13px] rounded-md transition-all",
                  location.pathname === item.path
                    ? "text-foreground font-medium"
                    : "text-foreground/50 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 h-4 w-px bg-border" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-1 size-8 rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="size-3.5" />
              ) : (
                <Moon className="size-3.5" />
              )}
            </Button>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="size-8 rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="size-3.5" />
              ) : (
                <Moon className="size-3.5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="size-8 rounded-full"
            >
              {mobileOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="absolute top-14 left-0 right-0 border-b border-border bg-background/95 backdrop-blur-xl p-4 animate-fade-in">
            <div className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2.5 text-sm rounded-lg transition-colors",
                    location.pathname === item.path
                      ? "text-foreground font-medium bg-muted/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
