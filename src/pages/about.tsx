import { Badge } from "@/components/ui/badge";
import { PROFILE, SKILLS } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <div id="about" className="mx-auto max-w-3xl px-6 py-20 sm:py-28 scroll-mt-14 section-glow" ref={ref}>
      <div data-animate>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          About
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          A bit about me
        </h1>
        <div className="mt-2 h-px w-12 bg-gradient-to-r from-accent-glow/50 to-transparent" />
      </div>

      <div className="mt-12 grid gap-16 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5" data-animate data-animate-delay="0.1">
          {PROFILE.bio.map((paragraph, i) => (
            <p key={i} className="text-[15px] leading-[1.75] text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-8" data-animate data-animate-delay="0.2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.technologies.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-md font-normal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:bg-accent-glow/10 cursor-default"
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
                  className="rounded-md font-normal transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-glow/30 cursor-default"
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
