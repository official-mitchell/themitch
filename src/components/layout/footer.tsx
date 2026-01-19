// Updated: Transformed from Figma Make Footer component to Next.js App Router structure
// Replaced SVG imports with lucide-react icons, converted anchor links to Next.js Link
import Link from 'next/link';
import { Mail, MapPin, Twitter, Linkedin, Send } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:mitchellopatowsky@gmail.com" },
    { name: "Telegram", icon: Send, url: "https://t.me/officialmitchell" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/_themitch_" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/mopa/" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Mitchell Opatowsky</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Product Strategist & Fractional Advisor specializing in
              Go-to-Market, Product Positioning, and Fundraising Strategy.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <span>mitchellopatowsky@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resume"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mitchell Opatowsky. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
