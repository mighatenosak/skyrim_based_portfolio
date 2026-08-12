import MainMenu from "./components/MainMenu";
import CompassNav from "./components/CompassNav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TipTicker from "./components/TipTicker";

export default function Home() {
  return (
    <>
      <CompassNav />
      <MainMenu />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <TipTicker />
    </>
  );
}
