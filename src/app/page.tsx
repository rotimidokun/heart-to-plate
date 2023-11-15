"use client";

import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section/hero-section";
import { About } from "@/components/about/about";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="h-screen">
      <main className="min-h-screen max-w-screen-2xl">
        <Header />
        <HeroSection />
        <About />
      </main>
    </div>
  );
}
