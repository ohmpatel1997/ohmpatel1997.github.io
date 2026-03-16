import { Badge } from "@/components/ui/badge";
import { PROFILE, SKILLS } from "@/lib/data";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          About
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          A bit about me
        </h1>
        <div className="mt-1 h-px w-12 bg-foreground/20" />
      </div>

      <div className="mt-12 grid gap-16 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {PROFILE.bio.map((paragraph, i) => (
            <p key={i} className="text-[15px] leading-[1.75] text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.technologies.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-md font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              Domains
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.domains.map((domain) => (
                <Badge
                  key={domain}
                  variant="outline"
                  className="rounded-md font-normal"
                >
                  {domain}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
