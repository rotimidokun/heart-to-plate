"use client";

import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section/hero-section";
import About from "@/components/about/about";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="">
        <About />
      </div>
    </main>
  );
}
