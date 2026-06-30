import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>
      <Contact />
      <Footer />
    </MotionProvider>
  );
}
