// Updated: Morphing header content from original themitch home HTML while maintaining existing layout and design aesthetic
// Incorporated key messaging: "I lead teams to solve complex problems", "Your friend in Product & Strategy", 
// "Austin-based innovator focused on reducing execution risk", and mission statement
// Updated: Fixed extra padding issue by removing top padding (pt-20) from hero section container since main element already handles header spacing
// Updated: Fixed content centering by using mx-auto on motion.div container for proper horizontal centering
"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <motion.div
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="text-center space-y-8">
          {/* Avatar with glow */}
          <motion.div className="flex justify-center mb-8 pt-8 md:pt-0" variants={itemVariants}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Avatar container */}
              <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-1 backdrop-blur-sm border border-purple-500/30">
                <div className="bg-gradient-to-br from-[#2C1250] to-[#1a0b2e] rounded-3xl overflow-hidden w-48 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1750535135593-3a8e5def331d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMGF2YXRhciUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3Njg0NDk0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mitchell Opatowsky"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>

          {/* Intro text */}
          <motion.div className="space-y-2" variants={itemVariants}>
            <p className="text-purple-400 text-sm tracking-wider uppercase">
              Hello! I'm <span className="text-purple-300 font-semibold">Mitchell</span>
            </p>
          </motion.div>

          {/* Main headline */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                I lead teams to solve complex problems
              </span>
              <br />
              <span className="text-4xl lg:text-5xl text-gray-400">
                to{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  better the world
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Austin-based innovator focused on reducing execution risk. I've always been exhilarated by disruptive technologies and witty product positioning.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0118] to-transparent" />
    </section>
  );
}
