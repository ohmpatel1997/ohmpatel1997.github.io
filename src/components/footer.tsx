import { Github, Twitter, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
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
              className="flex size-8 items-center justify-center rounded-full text-foreground/50 transition-colors hover:text-foreground"
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
