"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Skills } from "@/components/ui/Skills";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
  "/uploads/email/1.png",
  "/uploads/email/2.png",
  "/uploads/email/3.png",
  "/uploads/email/4.png",
  "/uploads/email/5.png",
  "/uploads/email/6.png",
  "/uploads/email/7.png",
  "/uploads/email/8.png",
  "/uploads/email/9.png",
  "/uploads/email/10.png",
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        {/* <ParallaxScroll images={images} /> */}
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
