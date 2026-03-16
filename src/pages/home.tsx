import { Link } from "react-router";
import { ArrowRight, Github, Twitter, Mail, BookOpen, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/lib/data";

export function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="flex flex-col items-center justify-center min-h-[calc(100svh-3.5rem)] py-24">
        {/* Avatar */}
        <div className="animate-fade-in mb-10 relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-foreground/20 to-foreground/5 blur-sm" />
          <img
            src={PROFILE.image}
            alt={PROFILE.name}
            className="relative size-32 rounded-full object-cover ring-2 ring-border"
          />
        </div>

        {/* Text */}
        <div className="animate-fade-in-up text-center" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for new engagements
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
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
          <Link
            to="/clients"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "gap-2 rounded-full px-5"
            )}
          >
            View Clients
            <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-5"
            )}
          >
            Get in Touch
          </Link>
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
              className="flex size-10 items-center justify-center rounded-full text-foreground/60 transition-all hover:bg-muted hover:text-foreground"
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
