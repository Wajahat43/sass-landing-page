import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import MenuIcon from "@/components/Icons/MenuIcon";
import Button from "@/components/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 items-center rounded-full border border-white/15 p-2 px-4 md:pr-2 lg:grid-cols-3">
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
            <MenuIcon className="md:hidden" />
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
      </div>
    </section>
  );
}
