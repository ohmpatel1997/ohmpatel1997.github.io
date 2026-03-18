import { Github, Twitter, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-glow/20 to-transparent" />
      <div className="mx-auto max-w-3xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Ohm Patel
        </p>
        <div className="flex items-center gap-1">
          {[
            { href: PROFILE.links.github, icon: Github, label: "GitHub" },
            { href: PROFILE.links.twitter, icon: Twitter, label: "Twitter" },
            { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              className="flex size-8 items-center justify-center rounded-full text-foreground/50 transition-all duration-200 hover:text-accent-glow hover:bg-accent-glow/10 hover:scale-110"
              aria-label={label}
            >
              <Icon className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
