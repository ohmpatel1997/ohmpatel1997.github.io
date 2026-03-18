import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/pages/home";
import { AboutSection } from "@/pages/about";
import { ClientsSection } from "@/pages/clients";
import { ProjectsSection } from "@/pages/projects";
import { SpeakingSection } from "@/pages/speaking";
import { ContactSection } from "@/pages/contact";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <ProjectsSection />
        <SpeakingSection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}
