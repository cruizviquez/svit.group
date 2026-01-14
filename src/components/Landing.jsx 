import React, { useState, useEffect } from 'react';
import { Brain, Cpu, BarChart3, Zap, ChevronRight, Menu, X, Code, Database, TrendingUp } from 'lucide-react';

export default function AIConsultancyLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Brain, title: "Machine Learning Solutions", desc: "Custom ML models tailored to your business needs" },
    { icon: Database, title: "Data Engineering", desc: "Scalable data pipelines and infrastructure" },
    { icon: BarChart3, title: "Predictive Analytics", desc: "Transform data into actionable insights" },
    { icon: Cpu, title: "AI Integration", desc: "Seamless AI implementation into existing systems" },
    { icon: Code, title: "MLOps & Automation", desc: "End-to-end ML lifecycle management" },
    { icon: TrendingUp, title: "Strategic Consulting", desc: "AI strategy and roadmap development" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SVIT.GROUP
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'Solutions', 'About', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {item}
                </a>
              ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/98 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Services', 'Solutions', 'About', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-cyan-300">
                  🚀 AI & ML Experts
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Intelligent AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                We deliver cutting-edge machine learning solutions that drive measurable results. From predictive analytics to automated workflows, we turn your data into competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center group">
                  Get Started
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300">
                  View Case Studies
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">100+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">95%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  {[Cpu, Brain, Database, Zap].map((Icon, i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                      <Icon className="w-12 h-12 text-cyan-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end AI/ML solutions designed to accelerate innovation and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can unlock new opportunities for your organization
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">SVIT.GROUP</span>
              </div>
              <p className="text-gray-400 mb-4">
                Global AI & ML consultancy delivering innovative solutions for modern businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-purple-400">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@svit.group</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2026 SVIT.GROUP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}