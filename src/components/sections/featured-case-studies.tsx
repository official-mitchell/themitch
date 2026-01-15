// Updated: Transformed from Figma Make FeaturedCaseStudies component to Next.js App Router structure
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  challenge: string;
  metrics?: string;
  image: string;
  gradient: string;
  tag: string;
}

export function FeaturedCaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Creating UX experiences in the data industry',
      description: 'Transformed complex data workflows into intuitive user experiences, reducing onboarding time by 65% and increasing user engagement.',
      challenge: 'Enterprise data teams struggled with fragmented tools and steep learning curves.',
      metrics: '65% faster onboarding',
      image: 'https://images.unsplash.com/photo-1661523720040-5d7432a3e332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3NjgzOTExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-emerald-900/50 to-teal-900/50',
      tag: 'Enterprise SaaS',
    },
    {
      id: '2',
      title: 'Helping people to start with a new advanced platform',
      description: 'Designed comprehensive onboarding flows and educational content that empowered users to master DeFi protocols independently.',
      challenge: 'New users found crypto trading platforms intimidating and complex.',
      metrics: '3x user retention',
      image: 'https://images.unsplash.com/photo-1661523720040-5d7432a3e332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3NjgzOTExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-900/50 to-indigo-900/50',
      tag: 'DeFi Protocol',
    },
    {
      id: '3',
      title: 'Lorem ipsum dolor lorem dolor platform',
      description: 'Architected a scalable design system and component library that accelerated product development across 5 teams.',
      challenge: 'Product teams were building redundant features with inconsistent UX patterns.',
      metrics: '40% faster development',
      image: 'https://images.unsplash.com/photo-1661523720040-5d7432a3e332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3NjgzOTExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-900/50 to-pink-900/50',
      tag: 'Product Design',
    },
    {
      id: '4',
      title: 'Enhancing the podcasts experience with AI',
      description: 'Integrated AI-powered recommendations and personalization features that doubled content consumption per session.',
      challenge: 'Users struggled to discover relevant podcast content in a crowded marketplace.',
      metrics: '2x engagement',
      image: 'https://images.unsplash.com/photo-1661523720040-5d7432a3e332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3NjgzOTExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-violet-900/50 to-purple-900/50',
      tag: 'AI/ML Product',
    },
  ];

  return (
    <section id="case-studies" className="relative py-24 bg-gradient-to-b from-[#0a0118] via-[#16051f] to-[#0a0118] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions that drive measurable business impact
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="relative group">
              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${study.gradient} backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl`}>
                {/* Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 bg-[#1a0b2e]/80 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                    {study.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  {/* Text content */}
                  <div className="flex-1 mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                      {study.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-400 text-sm">
                          <span className="text-gray-300 font-medium">Challenge:</span> {study.challenge}
                        </p>
                      </div>
                      
                      {study.metrics && (
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full flex-shrink-0" />
                          <p className="text-gray-400 text-sm">
                            <span className="text-purple-300 font-semibold">{study.metrics}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile mockup */}
                  <div className="relative">
                    <div className="relative group/img">
                      {/* Glow behind phone */}
                      <div className="absolute inset-0 bg-purple-600/30 rounded-3xl blur-2xl" />
                      
                      {/* Phone container */}
                      <div className="relative bg-[#0a0118]/60 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30">
                        <div className="aspect-[9/19] bg-gradient-to-b from-purple-900/30 to-pink-900/30 rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl">
                          <img 
                            src={study.image} 
                            alt={study.title}
                            className="w-full h-full object-cover opacity-70 group-hover/img:opacity-90 transition-opacity"
                          />
                        </div>
                      </div>

                      {/* Floating particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-pulse" />
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-6 group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#2C1250] border border-purple-500/50 rounded-xl text-white text-sm font-medium hover:bg-purple-900/50 transition-all self-start">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Gradient accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
