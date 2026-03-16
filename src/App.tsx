import { HashRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { ClientsPage } from "@/pages/clients";
import { ProjectsPage } from "@/pages/projects";
import { SpeakingPage } from "@/pages/speaking";
import { ContactPage } from "@/pages/contact";

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="speaking" element={<SpeakingPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
