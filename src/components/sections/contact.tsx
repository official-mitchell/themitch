// Updated: Transformed from Figma Make DarkContact component to Next.js App Router structure
// Renamed from DarkContact to Contact, removed SVG imports
import { Mail, MapPin, Linkedin, Twitter, Github, Send } from "lucide-react";

export function Contact() {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, color: "from-blue-500 to-blue-600" },
    { name: "Twitter", icon: Twitter, color: "from-sky-500 to-blue-500" },
    { name: "Github", icon: Github, color: "from-gray-500 to-gray-600" },
    { name: "Medium", icon: Send, color: "from-green-500 to-emerald-600" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-[#0a0118] to-[#000000] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            I'm currently looking for a{" "}
            <span className="text-purple-400 font-semibold">
              Senior/Principal
            </span>{" "}
            new role
          </p>
          <p className="text-gray-500 mt-2">
            Had ideas learning about how things practically work!
          </p>
        </div>

        {/* Contact info */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity" />

          <div className="relative bg-gradient-to-br from-[#2C1250]/80 to-[#1a0b2e]/80 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-xl">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">mitchellopatowsky@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Austin, Texas, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.name} href="#" className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity`}
                />
                <div className="relative flex items-center gap-3 px-6 py-3 bg-[#2C1250] border border-purple-500/30 rounded-2xl hover:bg-purple-900/50 transition-all">
                  <Icon className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">{social.name}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Tech stack icons */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">Technologies & Platforms</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Figma", color: "bg-pink-500" },
              { name: "Notion", color: "bg-gray-800" },
              { name: "Slack", color: "bg-purple-600" },
              { name: "Discord", color: "bg-indigo-600" },
              { name: "GitHub", color: "bg-gray-700" },
              { name: "Webflow", color: "bg-blue-600" },
              { name: "VSCode", color: "bg-blue-500" },
              { name: "Twitter", color: "bg-sky-500" },
            ].map((tech) => (
              <div key={tech.name} className="group relative">
                <div
                  className={`absolute -inset-0.5 ${tech.color} rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity`}
                />
                <div
                  className={`relative ${tech.color} w-10 h-10 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white text-xs font-bold">
                    {tech.name.substring(0, 2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-24 pt-12 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg width="35" height="40" viewBox="0 0 35 43" fill="none">
                <path
                  d="M0 2H35"
                  stroke="url(#footerGradient)"
                  strokeWidth="4"
                />
                <path
                  d="M0 40.5517H35"
                  stroke="url(#footerGradient)"
                  strokeWidth="4"
                />
                <path
                  d="M17.5 2V40.5517"
                  stroke="url(#footerGradient)"
                  strokeWidth="4"
                />
                <defs>
                  <linearGradient
                    id="footerGradient"
                    x1="0"
                    y1="0"
                    x2="35"
                    y2="43"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-gray-400 text-sm">Mitchell Opatowsky</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mitchell Opatowsky. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
