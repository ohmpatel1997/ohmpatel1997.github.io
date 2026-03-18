import { useState, useEffect } from "react";

export const SECTION_IDS = ["home", "about", "clients", "projects", "speaking", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const visibilityMap = new Map<SectionId, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id as SectionId, entry.intersectionRatio);
        });

        if (window.scrollY < 100) {
          setActiveSection("home");
          return;
        }

        let maxRatio = 0;
        let maxId: SectionId = "home";
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(maxId);
        }
      },
      {
        rootMargin: "-56px 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
