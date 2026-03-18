import { ArrowRight, Github, Twitter, Mail, BookOpen, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/lib/data";

export function HeroSection() {
  return (
    <div id="home" className="mx-auto max-w-3xl px-6 scroll-mt-14 relative">
      {/* Subtle radial background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-accent-glow/[0.04] blur-[100px]" />
      </div>

      <section className="flex flex-col items-center justify-center min-h-[calc(100svh-3.5rem)] py-24">
        {/* Avatar */}
        <div className="animate-fade-in mb-10 relative group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent-glow/20 via-accent-glow/5 to-transparent blur-md animate-glow-pulse" />
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-accent-glow/30 to-accent-glow/10" />
          <img
            src={PROFILE.image}
            alt={PROFILE.name}
            className="relative size-32 rounded-full object-cover ring-1 ring-white/10"
          />
        </div>

        {/* Text */}
        <div className="animate-fade-in-up text-center" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400/60 animate-ping" />
              <span className="relative size-1.5 rounded-full bg-emerald-500" />
            </span>
            Available for new engagements
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gradient">
            {PROFILE.name}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-muted-foreground font-medium">
            {PROFILE.title}
          </p>
          <p className="mt-1 flex items-center justify-center gap-1 text-sm text-muted-foreground/70">
            <MapPin className="size-3.5" />
            {PROFILE.location}
          </p>
        </div>

        <p
          className="animate-fade-in-up mt-6 max-w-md text-center text-[15px] leading-relaxed text-muted-foreground"
          style={{ animationDelay: "0.2s" }}
        >
          {PROFILE.tagline}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "gap-2 rounded-full px-6 shadow-[0_0_20px_-5px] shadow-accent-glow/20 hover:shadow-accent-glow/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            )}
          >
            View Clients
            <ArrowRight className="size-4" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6 hover:border-accent-glow/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            )}
          >
            Get in Touch
          </button>
        </div>

        {/* Social links */}
        <div
          className="animate-fade-in-up mt-12 flex items-center gap-1"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { href: PROFILE.links.github, icon: Github, label: "GitHub" },
            { href: PROFILE.links.twitter, icon: Twitter, label: "Twitter" },
            { href: PROFILE.links.medium, icon: BookOpen, label: "Medium" },
            { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              className="flex size-10 items-center justify-center rounded-full text-foreground/60 transition-all duration-200 hover:bg-accent-glow/10 hover:text-accent-glow hover:scale-105"
              aria-label={label}
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
