import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useActiveSection, type SectionId } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { useState } from "react";

const NAV_ITEMS: { label: string; id: SectionId }[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Clients", id: "clients" },
  { label: "Projects", id: "projects" },
  { label: "Speaking", id: "speaking" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  function scrollTo(id: SectionId) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <button
            onClick={() => scrollTo("home")}
            className="text-sm font-bold tracking-tight text-foreground hover:text-accent-glow transition-colors duration-200"
          >
            ohm.
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "px-3 py-1.5 text-[13px] rounded-full transition-all duration-200",
                  activeSection === item.id
                    ? "text-foreground font-medium bg-accent-glow/10"
                    : "text-foreground/50 hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.label}
              </button>
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
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "px-4 py-2.5 text-sm rounded-lg transition-colors text-left",
                    activeSection === item.id
                      ? "text-foreground font-medium bg-accent-glow/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
