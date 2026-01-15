// Updated: Transformed from Figma Make DarkAbout component to Next.js App Router structure
// Renamed from DarkAbout to About
export function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#16051f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              I'm a Software Engineer
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Currently, I'm a Product Strategist at{' '}
            <span className="text-purple-400 font-semibold">Mitchell Opatowsky Consulting</span>
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#2C1250]/80 to-[#1a0b2e]/80 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A self-taught product strategist, I am passionate about reducing execution risk for startups and growth-stage companies. 
                My approach combines <span className="text-purple-400 font-semibold">game theory</span> with{' '}
                <span className="text-purple-400 font-semibold">data-driven insights</span> to position products for market dominance.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With experience spanning <span className="text-purple-400">Web3</span>,{' '}
                <span className="text-purple-400">DeFi</span>, and{' '}
                <span className="text-purple-400">enterprise SaaS</span>, I've helped companies acquire millions in funding, 
                generate hundreds of millions in trading volume, and reduce product iteration cycles by 35%.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Based in <span className="text-purple-400 font-semibold">Austin, Texas</span>, I work with founders and 
                leadership teams to craft compelling go-to-market strategies, refine product positioning, and secure strategic 
                funding to fuel growth.
              </p>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-60" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-60" />
            </div>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Product Strategy', icon: '🎯' },
              { title: 'Go-to-Market', icon: '🚀' },
              { title: 'Fundraising', icon: '💰' },
            ].map((skill, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-gradient-to-br from-[#2C1250]/60 to-[#1a0b2e]/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
