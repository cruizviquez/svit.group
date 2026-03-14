import React, { useState, useEffect, useRef } from 'react';
import { Brain, Cpu, BarChart3, Zap, ChevronRight, Menu, X, Code, Database, TrendingUp } from 'lucide-react';

export default function AIConsultancyLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animar Projects (0 a 100)
          let projectStart = 0;
          const projectEnd = 100;
          const projectDuration = 2000;
          const projectIncrement = projectEnd / (projectDuration / 16);
          
          const projectTimer = setInterval(() => {
            projectStart += projectIncrement;
            if (projectStart >= projectEnd) {
              setProjectsCount(projectEnd);
              clearInterval(projectTimer);
            } else {
              setProjectsCount(Math.floor(projectStart));
            }
          }, 16);

          // Animar Satisfaction (0 a 95)
          let satisfactionStart = 0;
          const satisfactionEnd = 98;
          const satisfactionDuration = 2000;
          const satisfactionIncrement = satisfactionEnd / (satisfactionDuration / 16);
          
          const satisfactionTimer = setInterval(() => {
            satisfactionStart += satisfactionIncrement;
            if (satisfactionStart >= satisfactionEnd) {
              setSatisfactionCount(satisfactionEnd);
              clearInterval(satisfactionTimer);
            } else {
              setSatisfactionCount(Math.floor(satisfactionStart));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

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
            <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SVIT.GROUP
              </span>
            </a>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'Solutions', 'Blog', 'About', 'Contact'].map(item => (
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
              {['Services', 'Solutions', 'Blog', 'About', 'Contact'].map(item => (
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
                  Smart AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                We deliver cutting-edge machine learning solutions that drive measurable results. From predictive analytics to automated workflows, we turn your data into competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center group">
                  Get Started
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300">
                  <a href="#case-studies">View Case Studies</a>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8" ref={statsRef}>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">{projectsCount}+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">{satisfactionCount}%</div>
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

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Industry-leading AI/ML solutions powering businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Computer Vision */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                Computer Vision
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Advanced image and video analysis for object detection, facial recognition, quality control, and automated visual inspection systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Object Detection</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Image Classification</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">OCR</span>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                Natural Language Processing
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Intelligent chatbots, sentiment analysis, text summarization, and language understanding for customer service and content automation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Chatbots</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Sentiment Analysis</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Translation</span>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Predictive Analytics
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Forecast trends, customer behavior, and business outcomes using advanced time series analysis and machine learning models.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Forecasting</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Demand Planning</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Risk Analysis</span>
              </div>
            </div>

            {/* Recommendation Systems */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                Recommendation Systems
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Personalized product recommendations, content suggestions, and user matching to increase engagement and conversion rates.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs">Personalization</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs">Collaborative Filtering</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs">Content-Based</span>
              </div>
            </div>

            {/* Fraud Detection */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                Fraud Detection & Security
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Real-time anomaly detection and fraud prevention using advanced ML algorithms to protect your business and customers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">Anomaly Detection</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">Risk Scoring</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">Pattern Recognition</span>
              </div>
            </div>

            {/* Automation & Optimization */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                Process Automation
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Intelligent automation and optimization of business processes using reinforcement learning and decision intelligence systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">RPA</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Workflow Optimization</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Smart Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Success <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-world AI implementations delivering measurable business impact
            </p>
          </div>

          <div className="space-y-8">
            {/* Case Study 1: AML */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Anti-Money Laundering (AML) Detection System</h3>
                  <p className="text-sm text-gray-500 mb-4">Financial Services | Global Banking Institution</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">SPECIFIC</h4>
                  <p className="text-gray-300 text-sm">Implement ML-powered transaction monitoring system to detect suspicious financial activities and reduce false positives in AML compliance.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-purple-400 text-sm mb-2">MEASURABLE</h4>
                  <p className="text-gray-300 text-sm">Reduced false positives by 73%, decreased investigation time by 65%, and improved detection accuracy to 94.2%.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-blue-400 text-sm mb-2">ACHIEVABLE</h4>
                  <p className="text-gray-300 text-sm">Utilized ensemble learning with XGBoost and neural networks, trained on 5+ years of historical transaction data.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-pink-400 text-sm mb-2">RELEVANT</h4>
                  <p className="text-gray-300 text-sm">Ensured regulatory compliance, protected reputation, and saved $12M annually in compliance costs.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-green-400 text-sm mb-2">TIME-BOUND</h4>
                  <p className="text-gray-300 text-sm">Full deployment achieved in 8 months with real-time monitoring operational 24/7.</p>
                </div>
              </div>
            </div>

            {/* Case Study 2: Streaming Platform */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Emotion-Based Content Recommendation Engine</h3>
                  <p className="text-sm text-gray-500 mb-4">Entertainment | Video Streaming Platform</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">SPECIFIC</h4>
                  <p className="text-gray-300 text-sm">Build AI system to analyze user sentiment and emotional responses to recommend personalized content that matches viewer mood.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-purple-400 text-sm mb-2">MEASURABLE</h4>
                  <p className="text-gray-300 text-sm">Increased user engagement by 42%, watch time by 38%, and reduced churn rate by 28%.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-blue-400 text-sm mb-2">ACHIEVABLE</h4>
                  <p className="text-gray-300 text-sm">Implemented NLP sentiment analysis with collaborative filtering and deep learning recommendation models.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-pink-400 text-sm mb-2">RELEVANT</h4>
                  <p className="text-gray-300 text-sm">Enhanced user experience, increased subscription retention, and boosted revenue by $18M annually.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-green-400 text-sm mb-2">TIME-BOUND</h4>
                  <p className="text-gray-300 text-sm">MVP launched in 6 months, full rollout to 50M+ users completed in 10 months.</p>
                </div>
              </div>
            </div>

            {/* Case Study 3: AI Proctoring */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">AI-Powered Exam Proctoring System</h3>
                  <p className="text-sm text-gray-500 mb-4">Education | University Admission Platform</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">SPECIFIC</h4>
                  <p className="text-gray-300 text-sm">Deploy computer vision AI to monitor online admission exams, detect cheating behaviors, and ensure exam integrity.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-purple-400 text-sm mb-2">MEASURABLE</h4>
                  <p className="text-gray-300 text-sm">Detected 96.8% of cheating attempts, reduced manual monitoring by 87%, processed 250K+ exams successfully.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-blue-400 text-sm mb-2">ACHIEVABLE</h4>
                  <p className="text-gray-300 text-sm">Applied facial recognition, gaze tracking, and behavior analysis using CNNs and real-time video processing.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-pink-400 text-sm mb-2">RELEVANT</h4>
                  <p className="text-gray-300 text-sm">Maintained academic integrity, enabled remote testing, and reduced proctoring costs by 72%.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-green-400 text-sm mb-2">TIME-BOUND</h4>
                  <p className="text-gray-300 text-sm">System deployed in 5 months, scaled to support 100K concurrent users within 7 months.</p>
                </div>
              </div>
            </div>

            {/* Case Study 4: SAP Retail Integration */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-pink-400 mb-2">SAP-Integrated Demand Planning & Auto-Replenishment</h3>
                  <p className="text-sm text-gray-500 mb-4">Retail | Multi-Chain Department Store</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">SPECIFIC</h4>
                  <p className="text-gray-300 text-sm">Integrate ML demand forecasting with SAP ERP to automate inventory planning and replenishment across 500+ stores.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-purple-400 text-sm mb-2">MEASURABLE</h4>
                  <p className="text-gray-300 text-sm">Reduced stockouts by 58%, decreased excess inventory by 44%, improved forecast accuracy to 91%.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-blue-400 text-sm mb-2">ACHIEVABLE</h4>
                  <p className="text-gray-300 text-sm">Developed time series forecasting models with external data integration via SAP APIs and automated workflows.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-pink-400 text-sm mb-2">RELEVANT</h4>
                  <p className="text-gray-300 text-sm">Optimized inventory costs, improved customer satisfaction, and generated $24M in annual savings.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-green-400 text-sm mb-2">TIME-BOUND</h4>
                  <p className="text-gray-300 text-sm">Pilot in 50 stores completed in 4 months, full rollout achieved in 12 months.</p>
                </div>
              </div>
            </div>

            {/* Case Study 5: Healthcare */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">AI-Assisted Disease Diagnosis & Patient Risk Stratification</h3>
                  <p className="text-sm text-gray-500 mb-4">Healthcare | Hospital Network</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">SPECIFIC</h4>
                  <p className="text-gray-300 text-sm">Create ML system to analyze patient data, medical imaging, and EHRs to assist diagnosis and predict health risks.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-purple-400 text-sm mb-2">MEASURABLE</h4>
                  <p className="text-gray-300 text-sm">Achieved 93.5% diagnostic accuracy, reduced diagnosis time by 52%, identified high-risk patients with 89% precision.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-blue-400 text-sm mb-2">ACHIEVABLE</h4>
                  <p className="text-gray-300 text-sm">Implemented deep learning for medical imaging analysis and gradient boosting for patient risk scoring.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-pink-400 text-sm mb-2">RELEVANT</h4>
                  <p className="text-gray-300 text-sm">Improved patient outcomes, enabled early intervention, and reduced readmission rates by 35%.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-green-400 text-sm mb-2">TIME-BOUND</h4>
                  <p className="text-gray-300 text-sm">Clinical trials completed in 9 months, deployment across 12 hospitals in 14 months.</p>
                </div>
              </div>
            </div>

            {/* Case Study 6: Restaurant Food Waste */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Smart Consumption Forecasting to Reduce Food Waste</h3>
                  <p className="text-sm text-gray-500 mb-4">Food Service | Restaurant Chain</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-cyan-400 text-sm mb-2">SPECIFIC</h4>
                  <p className="text-gray-300 text-sm">Predict daily food consumption by menu item using ML to optimize preparation quantities and minimize waste.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-purple-400 text-sm mb-2">MEASURABLE</h4>
                  <p className="text-gray-300 text-sm">Reduced food waste by 61%, decreased food costs by 23%, improved forecast accuracy to 88%.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-blue-400 text-sm mb-2">ACHIEVABLE</h4>
                  <p className="text-gray-300 text-sm">Built time series models incorporating weather, events, holidays, and historical sales with automated daily predictions.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-pink-400 text-sm mb-2">RELEVANT</h4>
                  <p className="text-gray-300 text-sm">Enhanced sustainability, reduced environmental impact, and saved $3.2M annually across 85 locations.</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="font-bold text-green-400 text-sm mb-2">TIME-BOUND</h4>
                  <p className="text-gray-300 text-sm">Pilot tested in 5 restaurants over 3 months, full deployment completed in 7 months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SVIT.GROUP</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leading AI innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  SVIT.GROUP is a cutting-edge AI consultancy dedicated to transforming businesses through innovative artificial intelligence solutions. We believe in the power of AI to revolutionize industries and create unprecedented opportunities for growth.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Our Story</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  SVIT.GROUP was born from a simple but powerful conviction: that AI and predictive intelligence shouldn't be reserved for tech giants alone.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our founders — a group of engineers, data scientists, and business strategists — had spent years inside large corporations watching the same story repeat itself: inefficiencies hiding in plain sight, millions in unnecessary costs, and decisions made on gut feeling when data was right there, untapped. They knew there was a better way.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  So they left the comfort of their corporate roles and built something new. Starting with a small team in San Diego, they channeled their experience into building AI and machine learning solutions that actually move the needle — not just impressive demos, but real models that predict demand, flag anomalies, optimize resources, and generate measurable savings from day one.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, SVIT.GROUP works with companies across industries to make operations smarter and leaner. The mission has never changed: put the right intelligence in the right hands, and let the results speak for themselves.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Expert Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team comprises world-class AI experts, including PhDs in Computer Science and Machine Learning specialists with decades of combined experience. We bring academic rigor and industry expertise to every project, ensuring cutting-edge solutions backed by solid research and a relentless focus on practical impact.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">San Diego Roots</h3>
                <p className="text-gray-300 leading-relaxed">
                  Based in San Diego, California, we're at the heart of one of America's most innovative tech hubs. Our location gives us access to top talent and allows us to stay at the forefront of AI advancement while serving clients globally.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">PhD-Level Expertise</h4>
                        <p className="text-gray-400 text-sm">Advanced academic credentials and research experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Proven Track Record</h4>
                        <p className="text-gray-400 text-sm">100+ successful AI implementations across industries</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Cutting-Edge Technology</h4>
                        <p className="text-gray-400 text-sm">Latest AI/ML frameworks and methodologies</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Global Reach</h4>
                        <p className="text-gray-400 text-sm">Serving clients worldwide from our San Diego headquarters</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">End-to-End Solutions</h4>
                        <p className="text-gray-400 text-sm">From strategy to deployment and ongoing support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights and stories on how AI is reshaping operations and driving real savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Article 1 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-700/30 px-8 pt-10 pb-6">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold uppercase tracking-wide">Operations</span>
                <h3 className="text-2xl font-bold mt-4 mb-2 group-hover:text-cyan-400 transition-colors">
                  From Gut Feel to Data: How a Logistics Company Cut Costs by 31% in One Quarter
                </h3>
                <p className="text-gray-400 text-sm">March 2026 · 6 min read</p>
              </div>
              <div className="px-8 py-6 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  When a mid-sized logistics company came to us, their operations team was drowning in spreadsheets. Route planning, warehouse staffing, and fuel budgeting were all driven by experience and instinct — not bad inputs, but not scalable ones either.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We built a predictive operations layer that ingested historical delivery data, weather patterns, and real-time traffic feeds. Within six weeks, the model was forecasting daily route loads with 89% accuracy — and automatically adjusting staffing recommendations each morning.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The results after one quarter: a 31% reduction in overtime costs, 18% fewer empty return trips, and a 22% drop in fuel spend. But the shift that surprised the operations director most wasn't financial — it was cultural. "The team stopped arguing about who was right," he told us. "Now we just look at the data."
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Efficiency gains don't always require a complete system overhaul. Sometimes the biggest lever is simply surfacing the right information, at the right time, to the right person. That's where AI earns its keep.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs">Predictive Analytics</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs">Logistics</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs">Cost Reduction</span>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-700/30 px-8 pt-10 pb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold uppercase tracking-wide">Manufacturing</span>
                <h3 className="text-2xl font-bold mt-4 mb-2 group-hover:text-purple-400 transition-colors">
                  The Hidden Cost of Reactive Maintenance — and How Predictive AI Changed Everything
                </h3>
                <p className="text-gray-400 text-sm">February 2026 · 7 min read</p>
              </div>
              <div className="px-8 py-6 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Every manufacturer knows the dread of an unplanned shutdown. A line stops, production halts, and a chain reaction of costs begins — emergency technicians, expedited parts, missed shipments, and customer penalties. For one industrial manufacturer we worked with, unplanned downtime was costing them over $2.4M a year.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The root problem wasn't their equipment — it was their maintenance strategy. They were reacting to failures instead of preventing them. Our team integrated IoT sensor data from 140 machines into a predictive maintenance model that flagged anomalies up to 72 hours before a breakdown was likely.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In the first year, unplanned downtime dropped by 67%. Maintenance teams shifted from firefighting to planned, scheduled interventions — which also meant less overtime and fewer emergency part orders. The total annual savings came to $1.9M, with the system paying for itself in under five months.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The broader lesson: in manufacturing, efficiency isn't just about producing more — it's about failing less. Predictive AI doesn't eliminate risk, but it turns the unknown into the manageable.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs">Predictive Maintenance</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs">Manufacturing</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs">IoT</span>
                </div>
              </div>
            </div>
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
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-purple-400">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@svit.group</li>
                <li><a href="https://www.linkedin.com/company/svit-group/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
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