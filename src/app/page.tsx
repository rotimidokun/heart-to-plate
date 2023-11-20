'use client';

import Header from '@/components/header/header';
import HeroSection from '@/components/hero-section/hero-section';
import { About } from '@/components/about/about';
import { Footer } from '@/components/footer/footer';
import { Tickets } from '@/components/tickets';
import './globals.css';

import { DM_Sans } from 'next/font/google';
import { Merchandise } from '@/components/merchandise';

const dmScript = DM_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={dmScript.className}>
      <main className="min-h-screen max-w-screen-2xl">
        <Header />
        <HeroSection />
        <About />
        <Tickets />
        <Merchandise />
        <Footer />
      </main>
    </div>
  );
}
