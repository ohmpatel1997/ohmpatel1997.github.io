import { Badge } from "@/components/ui/badge";
import { TALKS } from "@/lib/data";
import { Mic } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function SpeakingSection() {
  const ref = useScrollAnimation();

  return (
    <div id="speaking" className="mx-auto max-w-3xl px-6 py-20 sm:py-28 scroll-mt-14 section-glow" ref={ref}>
      <div data-animate>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          Community
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Speaking & Talks
        </h1>
        <div className="mt-2 h-px w-12 bg-gradient-to-r from-accent-glow/50 to-transparent" />
      </div>

      <div className="mt-14 space-y-4">
        {TALKS.map((talk, i) => (
          <div
            key={talk.event}
            className="group flex gap-4 rounded-xl border border-border/60 bg-card/30 p-5 transition-all duration-300 hover:border-accent-glow/20 hover:bg-card/80 hover:shadow-[0_4px_25px_-8px] hover:shadow-accent-glow/15 hover:-translate-y-0.5 gradient-border"
            data-animate
            data-animate-delay={`${0.1 + i * 0.08}`}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-glow/10 to-accent-glow/5 text-accent-glow/60 transition-all duration-300 group-hover:from-accent-glow/20 group-hover:to-accent-glow/10 group-hover:text-accent-glow/80">
              <Mic className="size-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {talk.event}
              </h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-3">
                {talk.topic}
              </p>
              <Badge variant="secondary" className="rounded-md text-[11px] font-normal">
                {talk.type}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
