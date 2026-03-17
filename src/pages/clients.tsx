import { CLIENTS, VENTURES } from "@/lib/data";
import { Building2, Rocket } from "lucide-react";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

export function ClientsPage() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
          Portfolio
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Clients I've Worked With
        </h1>
        <div className="mt-1 h-px w-12 bg-foreground/20" />
        <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-lg">
          I partner with companies to architect and scale their most critical systems.
          Tap or hover on a card to see what I delivered.
        </p>
      </div>

      {/* Client flip cards */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {CLIENTS.map((client, i) => (
          <div
            key={client.company}
            className="animate-fade-in-up group [perspective:1000px]"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className={`relative h-72 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${flipped === i ? "[transform:rotateY(180deg)]" : ""}`}>
              {/* Front — Logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border/60 bg-card/50 p-6 [backface-visibility:hidden]">
                <div className="flex size-20 items-center justify-center rounded-2xl border border-border/40 bg-background mb-5">
                  {client.logo ? (
                    <img
                      src={`${BASE}${client.logo}`}
                      alt={`${client.company} logo`}
                      className="size-12 object-contain"
                    />
                  ) : (
                    <Building2 className="size-8 text-muted-foreground/30" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {client.company}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground text-center">
                  {client.tagline}
                </p>
                <p className="mt-4 text-xs text-muted-foreground/40">
                  <span className="hidden sm:inline">Hover</span>
                  <span className="sm:hidden">Tap</span> to see details
                </p>
              </div>

              {/* Back — Details */}
              <div className="absolute inset-0 flex flex-col rounded-xl border border-border/60 bg-card p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-background">
                    {client.logo ? (
                      <img
                        src={`${BASE}${client.logo}`}
                        alt={`${client.company} logo`}
                        className="size-5 object-contain"
                      />
                    ) : (
                      <Building2 className="size-4 text-muted-foreground/30" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {client.company}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {client.tagline}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {client.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-[12.5px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[7px] size-[3px] shrink-0 rounded-full bg-muted-foreground/40" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Own ventures */}
      <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <div className="flex items-center gap-2 mb-6">
          <Rocket className="size-4 text-muted-foreground/50" />
          <h2 className="text-lg font-semibold text-foreground">
            My Own Ventures
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {VENTURES.map((v) => (
            <div
              key={v.name}
              className="rounded-xl border border-border/60 bg-card/30 p-5 transition-all hover:border-foreground/15 hover:bg-card/80"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {v.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {v.tagline}
              </p>
              <ul className="space-y-1.5">
                {v.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-[12.5px] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-[7px] size-[3px] shrink-0 rounded-full bg-muted-foreground/30" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
