"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const backgrounds = [
  "background-1.png",
  "background-2.jpg",
  "background-3.jpg",
];

const INTERVAL = 60000;

export default function HeroSection({ id }: { id: string }) {
  const [curBackIndex, setCurBackIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurBackIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % backgrounds.length;
      });

      setFade(true);
      setTimeout(() => setFade(false), 1000);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id} className="relative min-h-[100dvh] flex items-center">
      <div className="fixed inset-0 -z-10">
        <Image
          src={`/${backgrounds[prevIndex]}`}
          alt=""
          fill
          priority
          className="object-cover"
        />

        <Image
          src={`/${backgrounds[curBackIndex]}`}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-[1.25rem] md:text-lg text-orange-200 mb-2 tracking-wide">
          Bem-vindo a casa da equipe estudantil
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 leading-tight"
          style={{ textShadow: "0 10px 30px rgba(0,0,0,0.6)" }}
        >
          Os Inquebráveis
        </h1>
      </div>
    </section>
  );
}
