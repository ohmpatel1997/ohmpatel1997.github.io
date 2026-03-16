import { Badge } from "@/components/ui/badge";
import { PROJECTS, OSS_CONTRIBUTIONS } from "@/lib/data";
import { ArrowUpRight, Github, GitFork } from "lucide-react";

export function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          Work
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Projects & Open Source
        </h1>
        <div className="mt-1 h-px w-12 bg-foreground/20" />
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-in-up group"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div className="h-full rounded-xl border border-border/60 bg-card/30 p-5 transition-all hover:border-foreground/15 hover:bg-card/80 hover:shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Github className="size-5 text-muted-foreground/50" />
                <ArrowUpRight className="size-4 text-muted-foreground/30 transition-all group-hover:text-foreground/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground font-mono mb-2">
                {project.name}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs text-muted-foreground/70">{project.language}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* OSS Contributions */}
      <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center gap-2 mb-4">
          <GitFork className="size-4 text-muted-foreground/50" />
          <h2 className="text-sm font-semibold text-foreground">
            Open Source Contributions
          </h2>
        </div>
        <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-4">
          Active contributor to major decentralized technology projects. Arctic Code Vault Contributor.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {OSS_CONTRIBUTIONS.map((contrib) => (
            <Badge key={contrib} variant="outline" className="rounded-md font-normal">
              {contrib}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <a
          href="https://github.com/ohmpatel1997"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="size-4" />
          <span>View all 45+ repositories</span>
          <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
