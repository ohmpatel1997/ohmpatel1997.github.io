import { PROFILE } from "@/lib/data";
import { Github, Twitter, Mail, BookOpen, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

export function ContactSection() {
  const ref = useScrollAnimation();

  return (
    <div id="contact" className="mx-auto max-w-3xl px-6 py-20 sm:py-28 scroll-mt-14 section-glow" ref={ref}>
      <div data-animate>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          Contact
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h1>
        <div className="mt-2 h-px w-12 bg-gradient-to-r from-accent-glow/50 to-transparent" />
      </div>

      <p
        className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground"
        data-animate
        data-animate-delay="0.1"
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
            className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/30 p-4 transition-all duration-300 hover:border-accent-glow/20 hover:bg-card/80 hover:shadow-[0_4px_25px_-8px] hover:shadow-accent-glow/15 hover:-translate-y-0.5 gradient-border"
            data-animate
            data-animate-delay={`${0.15 + i * 0.08}`}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-glow/10 to-accent-glow/5 text-accent-glow/60 transition-all duration-300 group-hover:from-accent-glow/20 group-hover:to-accent-glow/10 group-hover:text-accent-glow/80">
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
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-accent-glow/50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
