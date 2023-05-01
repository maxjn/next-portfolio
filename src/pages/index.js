import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HomeSection from "@/components/HomeSection";
import Me from "@/components/Me";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </main>
  );
}
