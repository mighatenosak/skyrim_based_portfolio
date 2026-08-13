import MainMenu from "./components/MainMenu";
import CompassNav from "./components/CompassNav";
import ThemeSoundToggle from "./components/ThemeSoundToggle";
import LoadScreen from "./components/LoadScreen";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ModuleArsenal from "./components/ModuleArsenal";
import Contact from "./components/Contact";
import TipTicker from "./components/TipTicker";

export default function Home() {
  return (
    <>
      <LoadScreen />
      <ThemeSoundToggle />
      <CompassNav />
      <MainMenu />
      <About />
      <Skills />
      <Projects />
      <ModuleArsenal />
      <Contact />
      <TipTicker />
    </>
  );
}
