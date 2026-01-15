// Updated: Transformed from Figma Make Testimonials component to Next.js App Router structure
"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  gradient: string;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      company: 'TechVentures Inc',
      content: "Mitchell's strategic insights were instrumental in helping us secure our Series A. His positioning framework helped us articulate our value proposition in a way that resonated with investors. We raised $8M in just 6 weeks.",
      avatar: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODM0NTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: '2',
      name: 'David Chen',
      role: 'Head of Product',
      company: 'DeFi Protocol',
      content: 'Working with Mitchell transformed how we think about product-market fit. His data-driven approach helped us reduce our iteration cycles by 35% and increase user retention by 3x. Truly exceptional work.',
      avatar: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODM0NTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Co-Founder',
      company: 'BuildSpace',
      content: "Mitchell doesn't just give advice—he partners with you. His game theory approach to competitive positioning helped us identify and dominate a niche market. Revenue grew 10x in 8 months.",
      avatar: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODM0NTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-pink-600 to-purple-600',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#16051f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from founders and leaders who've partnered with me
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main testimonial card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            <div className="relative bg-gradient-to-br from-[#2C1250]/80 to-[#1a0b2e]/80 backdrop-blur-xl rounded-3xl p-10 lg:p-16 border border-purple-500/20">
              {/* Quote icon */}
              <div className="absolute top-8 left-8">
                <div className={`p-4 bg-gradient-to-r ${testimonials[activeIndex].gradient} rounded-2xl shadow-lg`}>
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-16 mb-12">
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="relative group/avatar">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${testimonials[activeIndex].gradient} rounded-full blur opacity-60 group-hover/avatar:opacity-100 transition-opacity`} />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50">
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and role */}
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-purple-300 text-sm">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between border-t border-purple-500/20 pt-8">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all ${
                        index === activeIndex 
                          ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' 
                          : 'w-2 h-2 bg-purple-500/30 rounded-full hover:bg-purple-500/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="group/btn p-3 bg-[#2C1250] border border-purple-500/50 rounded-xl hover:bg-purple-900/50 transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-white group-hover/btn:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="group/btn p-3 bg-[#2C1250] border border-purple-500/50 rounded-xl hover:bg-purple-900/50 transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '$200M+', label: 'Capital Raised' },
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gradient-to-br from-[#2C1250]/60 to-[#1a0b2e]/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
