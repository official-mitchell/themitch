// Updated: Replaced inline SVG logo with themitch logo.svg from assets
// Updated: Text color changes based on scroll state - dark when not scrolled, white when scrolled
// Changed scroll-to-section to Next.js Link navigation
// Updated: Increased mobile menu option sizes (text and padding) for better touch targets
// Updated: Centered menu options, increased X button size with more margin below
// Updated: Further increased X button size and visibility, added more margin below X button
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text color classes based on scroll state
  const textColor = isScrolled ? "text-white" : "text-gray-900";
  const navLinkColor = isScrolled 
    ? (isActive(pathname) ? "text-white" : "text-gray-300 hover:text-white")
    : (isActive(pathname) ? "text-gray-900" : "text-gray-700 hover:text-gray-900");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-[#1a0b2e]/80 backdrop-blur-xl border-b border-purple-500/10"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className={`absolute inset-0 bg-purple-600 blur-lg transition-opacity ${
                isScrolled ? "opacity-50 group-hover:opacity-75" : "opacity-0"
              }`} />
              <Image
                src="/assets/themitch logo.svg"
                alt="Themitch Logo"
                width={35}
                height={40}
                className="relative"
              />
            </div>
            <span className={`${textColor} font-semibold text-lg hidden sm:block transition-colors`}>
              Mitchell Opatowsky
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled
                    ? (isActive(link.href)
                        ? "text-white"
                        : "text-gray-300 hover:text-white")
                    : (isActive(link.href)
                        ? "text-gray-900"
                        : "text-gray-700 hover:text-gray-900")
                } ${
                  isActive(link.href)
                    ? "after:opacity-100"
                    : "after:opacity-0 group-hover:after:opacity-70"
                } after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:rounded-full ${
                  isScrolled ? "after:bg-purple-400/80" : "after:bg-purple-600/80"
                } after:transition-opacity`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                  isScrolled ? "bg-purple-600/20" : "bg-purple-600/10"
                }`} />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-medium hover:from-purple-500 hover:to-pink-500 transition-all">
                Contact Me
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={`md:hidden p-2 transition-colors ${textColor}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-[#12051f] border-purple-500/20 text-white [&>button:last-child]:hidden"
            >
              <SheetClose asChild>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-4 rounded-lg bg-white/20 hover:bg-white/30 border border-purple-400/50 hover:border-purple-400 transition-all shadow-lg z-50"
                  aria-label="Close menu"
                >
                  <X size={36} strokeWidth={2.5} className="text-purple-300" />
                </button>
              </SheetClose>
              <div className="mt-28 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-md px-5 py-4 text-base font-medium transition-colors text-center flex items-center justify-center ${
                      isActive(link.href)
                        ? "bg-purple-600/20 text-white border-l-2 border-purple-400"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 rounded-md px-5 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-medium text-center flex items-center justify-center"
                >
                  Contact Me
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
