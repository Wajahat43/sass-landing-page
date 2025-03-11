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
        <div className="grid items-center grid-cols-2 p-2 px-4 border rounded-full lg:grid-cols-3 border-white/15 md:pr-2 ">
          <div>
            <Image
              src={logoImage}
              alt="Layers logo"
              className="w-auto h-9 md:h-auto "
            />
          </div>
          <div className="items-center justify-center hidden lg:flex">
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
              className="items-center hidden md:inline-flex"
            >
              Log In
            </Button>
            <Button
              variant="primary"
              className="items-center hidden md:inline-flex"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
