import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About | Mitchell Opatowsky",
  description: "Product Leader & Growth Strategist with 9 years of experience building and scaling innovative products.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-12"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Innovator, Product Leader & Growth Strategist
          </p>
        </div>

        {/* Bio Section */}
        <div className="space-y-20">
          {/* Section 1: Journey - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Mastering Product Strategy</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">My Journey into Product Management</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  I didn't just step into product management—I was forged in its fires. From my college dorm days, to random crypto conference networking events, to investor calls, I was thrown into fast-paced environments where the success or failure of the company rested on my <strong>decisions</strong>, <strong>quick thinking</strong>, and <strong>strategy</strong>.
                </p>
                <p className="leading-relaxed">
                  Over the past 9 years, my entire professional career, I learned how to craft roadmaps and deliver products that weren't just functional, but became trend setters. From <strong>A/B testing,</strong> to <strong>user feedback loops</strong>, to <strong>exhaustive market research</strong>, I built my expertise brick by brick.
                </p>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/67085c334cac335252158b5a_about%20asset%2001.jpg"
                alt="Product Strategy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Section 2: Startup Experience - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-96 w-full rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/67085c33593b60a61e41bd0f_about%20asset%2002.jpg"
                alt="Startup Experience"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Building, Scaling, and Thriving</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Life in the Trenches: The Startup Experience</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  The startup life isn't for everyone—but for me, it's where change must arise. Most companies thrive from consistent value extraction in stable macro conditions. The status quo is safe. Only from the outside, only from the unbureaucratic, can new patterns be forged.
                </p>
                <p className="leading-relaxed">
                  To this end, I've lived through the 18-hour workdays, the pivots, the scrappy resource management, and the relentless pressure to deliver. This environment taught me the <strong>true meaning of resilience</strong>.
                </p>
                <p className="leading-relaxed">
                  It's here that I honed my ability to lead under pressure, to spot opportunities in chaos, and to push the boundaries of what's possible with limited resources.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Maintaining Focus - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Sustaining Excellence</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Leadership Under Fire: Finding Balance</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Leadership isn't just about vision—it's about maintaining the stamina to see that vision through, especially when the pressure mounts. Early in my career, I learned that <strong>burnout is the enemy of success</strong>.
                </p>
                <p className="leading-relaxed">
                  I've developed methods for maintaining balance: from setting boundaries around work hours, to investing in health and mental clarity, to empowering my team to take ownership. As a leader, I've found that the key to sustainable success is not just in driving results, but also in ensuring both myself and my team can operate at peak performance over the long haul.
                </p>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/67085e44115bb7f72ffb3fd7_about%20asset%2003.jpg"
                alt="Finding Balance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Section 4: Evolving with Market - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-96 w-full rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="https://cdn.prod.website-files.com/66fadf41f73f5849260f608f/67085e93fd007cd67817028f_about%20asset%2004.jpg"
                alt="Evolving with Market"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Constant Learning</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Evolving with the Market</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  The tech landscape shifts quickly, and if you're not evolving, you're falling behind. I've always prioritized <strong>constant learning</strong>, staying ahead of industry trends and technologies.
                </p>
                <p className="leading-relaxed">
                  Whether it's diving deep into new AI applications, understanding the latest in Web 3.0, or refining agile methodologies, I ensure that I'm always equipped with the tools and knowledge to lead effectively. This adaptability allows me to guide companies through <strong>market pivots</strong>, product expansions, and scaling efforts with confidence and foresight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
