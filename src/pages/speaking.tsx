import { Badge } from "@/components/ui/badge";
import { TALKS } from "@/lib/data";
import { Mic } from "lucide-react";

export function SpeakingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          Community
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Speaking & Talks
        </h1>
        <div className="mt-1 h-px w-12 bg-foreground/20" />
      </div>

      <div className="mt-14 space-y-4">
        {TALKS.map((talk, i) => (
          <div
            key={talk.event}
            className="animate-fade-in-up group flex gap-4 rounded-xl border border-border/60 bg-card/30 p-5 transition-all hover:border-foreground/15 hover:bg-card/80"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted/80 text-muted-foreground/60 transition-colors group-hover:bg-muted group-hover:text-muted-foreground">
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
