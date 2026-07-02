"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const hoverEffect: string = "hover:underline";
const transition: string = "transition-all duration-500 ease-in-out";
const fontSize: string = "text-xl";

const classNameList: string[] = [hoverEffect, transition, fontSize];

const MobileMenuListItem = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  return (
    <li>
      <a
        href={href}
        className={"py-1 hover:text-orange-300 " + classNameList.join(" ")}
      >
        {title}
      </a>
    </li>
  );
};

const WebMenuListItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <li>
      <a href={href} className={classNameList.join(" ")}>
        {title}
      </a>
    </li>
  );
};

const MenuList = [
  { href: "home", title: "Início" },
  { href: "posts", title: "Novidades" },
  { href: "weare", title: "Quem Somos" },
  { href: "challenge", title: "Desafio" },
  { href: "sponsorsgrid", title: "Patrocinadores" },
  { href: "contact", title: "Plano de Patrocinio" },
  { href: "sponsor", title: "Contatos" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init();
  }, []);

  const homePath = "/";

  function getHref(anchor: string) {
    if (pathname === homePath) {
      return `#${anchor}`;
    } else {
      return `/${homePath}`.replace("//", "/");
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-orange-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" className="flex text-xl items-center">
            <Image
              src="/logo.png"
              alt="Os Inquebraveis Logo"
              height={1024}
              width={1024}
              style={{ maxWidth: "48px", marginRight: ".25rem" }}
            />
            Os Inquebráveis
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden lg:flex items-center gap-6">
          {MenuList.map(({ href, title }) => (
            <WebMenuListItem key={href} href={getHref(href)} title={title} />
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:hidden px-4 pb-4 bg-orange-600 text-white"
          >
            {MenuList.map(({ href, title }) => (
              <MobileMenuListItem
                key={href}
                href={getHref(href)}
                title={title}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
