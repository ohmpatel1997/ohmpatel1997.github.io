import { Badge } from "@/components/ui/badge";
import { PROJECTS, OSS_CONTRIBUTIONS } from "@/lib/data";
import { ArrowUpRight, Github, GitFork } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProjectsSection() {
  const ref = useScrollAnimation();

  return (
    <div id="projects" className="mx-auto max-w-3xl px-6 py-20 sm:py-28 scroll-mt-14 section-glow" ref={ref}>
      <div data-animate>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          Work
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Projects & Open Source
        </h1>
        <div className="mt-2 h-px w-12 bg-gradient-to-r from-accent-glow/50 to-transparent" />
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-animate
            data-animate-delay={`${0.1 + i * 0.08}`}
          >
            <div className="h-full rounded-xl border border-border/60 bg-card/30 p-5 transition-all duration-300 hover:border-accent-glow/20 hover:bg-card/80 hover:shadow-[0_4px_25px_-8px] hover:shadow-accent-glow/15 hover:-translate-y-1 gradient-border">
              <div className="flex items-center justify-between mb-4">
                <Github className="size-5 text-muted-foreground/50 transition-colors duration-300 group-hover:text-accent-glow/70" />
                <ArrowUpRight className="size-4 text-muted-foreground/30 transition-all group-hover:text-accent-glow/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground font-mono mb-2">
                {project.name}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-glow-pulse" style={{ filter: 'blur(3px)' }} />
                  <span className="relative size-2.5 rounded-full bg-cyan-400" />
                </span>
                <span className="text-xs text-muted-foreground/70">{project.language}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* OSS Contributions */}
      <div className="mt-16" data-animate data-animate-delay="0.4">
        <div className="flex items-center gap-2 mb-4">
          <GitFork className="size-4 text-accent-glow/50" />
          <h2 className="text-sm font-semibold text-foreground">
            Open Source Contributions
          </h2>
        </div>
        <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-4">
          Active contributor to major decentralized technology projects. Arctic Code Vault Contributor.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {OSS_CONTRIBUTIONS.map((contrib) => (
            <Badge key={contrib} variant="outline" className="rounded-md font-normal transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-glow/30 cursor-default">
              {contrib}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-8" data-animate data-animate-delay="0.5">
        <a
          href="https://github.com/ohmpatel1997"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-glow transition-colors duration-200"
        >
          <Github className="size-4" />
          <span>View all 45+ repositories</span>
          <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
