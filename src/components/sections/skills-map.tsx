"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skills = [
  {
    title: "Product Strategy",
    items: "Roadmapping, A/B, User Stories, Backlog Prioritization",
  },
  {
    title: "Product Lifecycle",
    items: "Lifecycle Analytics, Continuous Improvement, Post-Launch",
  },
  {
    title: "Positioning",
    items: "Differentiation, Competitive Analysis, Market Fit, Messaging",
  },
  {
    title: "Growth Marketing",
    items: "SEO & Paid Search, Performance Marketing, Marketing Automation",
  },
  {
    title: "Product Ops",
    items: "Sprint Planning, Agile & Scrum Project Management, Execution",
  },
  {
    title: "Growth Strategy",
    items: "Customer Acquisition, Retention Optimization, Virality",
  },
  {
    title: "Go-to-Market",
    items: "Market Penetration, Demand Generation, Channel Strategy",
  },
  {
    title: "Commercialization",
    items: "Revenue Models, Monetization, Pricing Strategy, Profitability",
  },
  {
    title: "Fundraising Strategy",
    items: "Pitch Development, Investor Relations, Financial Forecasting",
  },
  {
    title: "UI/UX Design",
    items: "Wireframing & Prototyping, Usability Testing",
  },
  {
    title: "Data Analysis",
    items: "Behavioral Analysis, KPIs & Metrics, Predictive Analysis",
  },
  {
    title: "Technical Proficiency",
    items: "SQL, REST APIs, AWS, Real-Time Monitoring",
  },
];

export function SkillsMap() {
  return (
    <section id="skills-map" className="relative py-24 bg-gradient-to-b from-[#16051f] to-[#0a0118] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Row 1 */}
          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[0].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[0].items}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[1].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[1].items}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[2].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[2].items}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[3].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[3].items}
            </p>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[4].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[4].items}
            </p>
          </motion.div>

          {/* Center Card - spans 2 cols x 2 rows */}
          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-6 md:p-8 col-span-3 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-center hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-2 md:mb-4">
              MY SPECIALITY
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Building companies that dominate
            </h2>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              My background on the front lines and in the war rooms has trained me with an intense mindset for company success. This is about understanding the opportunities at the fingertips to create and capture value from the market in more ways than one.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[5].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[5].items}
            </p>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[6].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[6].items}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[7].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[7].items}
            </p>
          </motion.div>

          {/* Row 4 */}
          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[8].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[8].items}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[9].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[9].items}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[10].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[10].items}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-purple-500/20 bg-[#1b0b2a]/60 backdrop-blur-sm p-4 md:p-6 hover:scale-105 hover:border-purple-500/40 transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              {skills[11].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {skills[11].items}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
