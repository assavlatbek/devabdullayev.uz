"use client";
import { useEffect } from "react";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Clients";
import Statistics from "@/components/Statistics";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Loader />
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Statistics />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
