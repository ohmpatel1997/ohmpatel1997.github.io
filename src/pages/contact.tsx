import { PROFILE } from "@/lib/data";
import { Github, Twitter, Mail, BookOpen, ArrowUpRight } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/ohmpatel1997",
    href: PROFILE.links.github,
    icon: Github,
  },
  {
    label: "X / Twitter",
    value: "x.com/OhmPatel1997",
    href: PROFILE.links.twitter,
    icon: Twitter,
  },
  {
    label: "Medium",
    value: "medium.com/@ohm.patel1997",
    href: PROFILE.links.medium,
    icon: BookOpen,
  },
];

export function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          Contact
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h1>
        <div className="mt-1 h-px w-12 bg-foreground/20" />
      </div>

      <p
        className="animate-fade-in-up mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground"
        style={{ animationDelay: "0.1s" }}
      >
        I'm always open to interesting conversations, collaborations, or just a
        friendly hello. Feel free to reach out through any of the channels below.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {CONTACT_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
            className="animate-fade-in-up group flex items-center gap-4 rounded-xl border border-border/60 bg-card/30 p-4 transition-all hover:border-foreground/15 hover:bg-card/80 hover:shadow-sm"
            style={{ animationDelay: `${0.15 + i * 0.08}s` }}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted/80 text-muted-foreground/60 transition-colors group-hover:bg-muted group-hover:text-muted-foreground">
              <link.icon className="size-[18px]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/50 mb-0.5">
                {link.label}
              </p>
              <p className="text-sm text-foreground truncate">
                {link.value}
              </p>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-foreground/50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
