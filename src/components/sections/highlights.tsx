"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Highlights() {
  return (
    <section
      id="highlights"
      className="relative py-12 bg-gradient-to-b from-[#0a0118] to-[#16051f] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-white text-center"
            variants={itemVariants}
          >
            Your friend in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GTM, Product, & Strategy
            </span>
          </motion.h2>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Card */}
            <motion.div
              className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 md:p-8 lg:col-span-1 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-center h-full min-h-[180px] md:min-h-[200px] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1750535135593-3a8e5def331d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMGF2YXRhciUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3Njg0NDk0OTR8MA&ixlib=rb-4.0.0&q=80&w=1080"
                  alt="Mitchell Opatowsky"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bio Card */}
            <motion.div
              className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-center space-y-4 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <div>
                <p className="text-sm uppercase tracking-widest text-purple-400 mb-2">
                  Mitchell Opatowsky
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  Austin-based innovator focused on reducing execution risk.
                </h3>
              </div>

              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  I've always been exhilarated by disruptive technologies and
                  witty product positioning. I love the challenge of helping
                  teams hit way above their weight even in saturated markets.
                </p>
                <p>
                  I look for founders who are intrinsically motivated by being
                  able to shift our paradigm.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Game Theory Card */}
            <motion.div
              className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 md:p-8 lg:col-span-2 lg:row-span-2 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-white mb-3">
                Utilizing game theory & data analysis to secure market share.
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                The most innovative companies are not always the ones that are
                inventing new things—sometimes the blue market differentiation
                is in finding a flaw of distribution.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                I specialize in helping founders utilize advanced analysis to
                achieve greater share.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
                Years in Startups
              </p>
              <p className="text-3xl font-bold text-white">9</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
                Years in C-Suite
              </p>
              <p className="text-3xl font-bold text-white">8</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
                Startups Funded
              </p>
              <p className="text-3xl font-bold text-white">3</p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
              variants={itemVariants}
            >
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
                Money Raised
              </p>
              <p className="text-3xl font-bold text-white">$2+M</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
