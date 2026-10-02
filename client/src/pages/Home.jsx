import React, { useRef } from "react";
import Banner from '../components/home/Banner';
import Counter from '../components/home/Counter';
import { LetsWorkTogether } from '../components/home/LetsWorkTogether';
import AboutMe from '../components/home/AboutMe';
import { Skills } from '../components/home/Skills';
import HomeServices from '../components/home/HomeServices';
import Projects from '../components/home/Projects';
import ContactMe from '../components/home/ContactMe';

export default function Home() {
  const cardRefs = useRef([]);
  const sections = [
    { component: <LetsWorkTogether />, color: 'bg-transparent', height: 'h-screen' },
    { component: <AboutMe />, color: 'bg-brand', height: 'h-screen' },
    { component: <Skills />, color: 'bg-brand', height: 'min-h-screen py-16' },
  ];

  return (
    <div className="w-full">
      <Banner />

      <section className="relative hidden md:block">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`sticky top-0 w-full flex items-center overflow-hidden border-t border-black/10 ${section.color} ${section.height} `}
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full">
              {section.component}
            </div>
          </div>
        ))}
      </section>

      {/* Mobile Flow */}
      <section className="md:hidden flex flex-col w-full gap-y-10">
        {sections.map((s, i) => <div key={i} className={s.color}>{s.component}</div>)}
      </section>

      <div className="mt-30">
        <HomeServices />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}
