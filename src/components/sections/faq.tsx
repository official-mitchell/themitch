// Updated: Transformed from Figma Make FAQ component to Next.js App Router structure
"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1');

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What does product strategy consulting involve?',
      answer: 'Product strategy consulting encompasses positioning analysis, go-to-market planning, competitive intelligence, and fundraising support. I work with founders and leadership teams to reduce execution risk through data-driven insights and game theory frameworks. Each engagement is tailored to your specific stage and objectives.',
    },
    {
      id: '2',
      question: 'How long is a typical engagement?',
      answer: 'Engagements typically range from 3-6 months depending on scope. Strategic assessments can be completed in 4-6 weeks, while full go-to-market implementations usually require 3-4 months. I also offer ongoing advisory relationships for companies that need continuous strategic support.',
    },
    {
      id: '3',
      question: 'What industries do you specialize in?',
      answer: 'I specialize in Web3, DeFi, and enterprise SaaS, with deep expertise in positioning technical products for both retail and institutional audiences. My background spans fintech, crypto protocols, real estate tech, and workflow automation platforms.',
    },
    {
      id: '4',
      question: 'Do you work with early-stage startups?',
      answer: 'Yes! I work with companies from pre-seed through Series B. For early-stage startups, I focus on positioning frameworks, initial market validation, and fundraising strategy. For growth-stage companies, I help optimize go-to-market execution and competitive positioning.',
    },
    {
      id: '5',
      question: 'What makes your approach different?',
      answer: 'I combine game theory with quantitative analysis to create defensible market positions. Rather than generic frameworks, I build custom strategic models based on your specific competitive dynamics, customer psychology, and market structure. My approach emphasizes measurable outcomes and execution risk reduction.',
    },
    {
      id: '6',
      question: 'How do you measure success?',
      answer: 'Success metrics are defined collaboratively at the start of each engagement. Common KPIs include capital raised, user acquisition costs, retention rates, sales cycle length, and market share gains. I believe in data-driven accountability and provide regular progress reports against agreed objectives.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-[#16051f] to-[#0a0118] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working together
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            
            return (
              <div key={faq.id} className="relative group">
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur transition-opacity ${
                  isOpen ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'
                }`} />
                
                {/* FAQ Item */}
                <div className={`relative bg-gradient-to-br from-[#2C1250]/60 to-[#1a0b2e]/60 backdrop-blur-xl rounded-2xl border transition-all ${
                  isOpen ? 'border-purple-500/40' : 'border-purple-500/20'
                }`}>
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left group/btn"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg lg:text-xl font-semibold pr-8 transition-colors ${
                      isOpen ? 'text-white' : 'text-gray-300 group-hover/btn:text-white'
                    }`}>
                      {faq.question}
                    </span>
                    
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-2 rounded-xl transition-all ${
                      isOpen 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                        : 'bg-purple-900/30 group-hover/btn:bg-purple-900/50'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-purple-300" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="pt-4 border-t border-purple-500/20">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gradient-to-br from-[#2C1250]/80 to-[#1a0b2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how I can help you achieve your strategic goals
              </p>
              <a
                href="#contact"
                className="inline-block group/cta"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-60 group-hover/cta:opacity-100 transition-opacity" />
                  <div className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all">
                    Schedule a Call
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
