"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import MenuIcon from "@/components/Icons/MenuIcon";
import Button from "@/components/Button";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div className="pb-[32px] md:pb-[98px] lg:pb-[130px]"></div>
      <section className="fixed top-0 z-50 w-full py-4 lg:py-8">
        <div className="container max-w-5xl">
          <div className="rounded-[27px] border border-white/15 bg-neutral-950/70 backdrop-blur md:rounded-full">
            <div className="grid grid-cols-2 items-center rounded-full p-2 px-4 md:pr-2 lg:grid-cols-3">
              <div>
                <Image
                  src={logoImage}
                  alt="Layers logo"
                  className="h-9 w-auto md:h-auto"
                />
              </div>
              <div className="hidden items-center justify-center lg:flex">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <MenuIcon
                  className="md:hidden"
                  isOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <Button
                  variant="secondary"
                  className="hidden items-center md:inline-flex"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden items-center md:inline-flex"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            {isMenuOpen && (
              <AnimatePresence>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="flex flex-col items-center gap-4 overflow-hidden py-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-center text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button variant="secondary" className="min-w-32">
                      Login
                    </Button>
                    <Button variant="primary" className="min-w-32">
                      Sign Up
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
