import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sobremim from "./components/Sobremim";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobremim />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}