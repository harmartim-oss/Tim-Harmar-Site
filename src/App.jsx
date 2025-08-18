import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Shield,
  Gavel,
  Lightbulb,
  Building,
  Mail,
  Phone,
  Menu,
  X,
  ChevronUp,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  Briefcase,
  Zap,
  Brain,
  Calendar,
  FileText,
  Bell
} from 'lucide-react';
import './App.css';

// Import cutting-edge components
import {
  AILegalAssistant,
  SmartScheduler,
  DocumentGenerator,
  LegalNewsFeed,
  LegalAssessment
} from './components/CuttingEdgeFeatures';

// Import assets
import logoImage from './assets/tim_harmar_logo_updated.png';
import heroBackground from './assets/hero_background.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact', 'resources'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity & Privacy Law",
      description: "Leading expertise in data protection, privacy compliance, and cybersecurity audits, ensuring your digital assets are secure and compliant.",
      features: ["PIPEDA Compliance", "Data Breach Response", "Privacy Policy Development", "Cybersecurity Audits", "CASL Compliance", "Data Governance"]
    },
    {
      icon: Gavel,
      title: "Civil Litigation",
      description: "Experienced in complex civil disputes, including appearances at all levels of court, notably the Supreme Court of Canada on a landmark development law case.",
      features: ["Supreme Court of Canada", "Commercial Disputes", "Administrative Law", "Regulatory Enforcement", "Appeals & Judicial Review"]
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property Law",
      description: "Comprehensive IP protection including patents, trademarks, copyrights, and licensing agreements, safeguarding your innovations.",
      features: ["Patent Applications", "Trademark Registration", "Copyright Protection", "IP Licensing", "Trade Secrets"]
    },
    {
      icon: Briefcase,
      title: "Business & Economic Development Consulting",
      description: "Strategic counsel for corporate structuring, commercial agreements, and driving economic growth through business development initiatives.",
      features: ["Corporate Structuring", "Commercial Agreements", "Mergers & Acquisitions", "Business Succession", "Grant Applications", "Economic Impact Assessments"]
    }
  ];

  const credentials = [
    "Master of Engineering, Cybersecurity Policy and Compliance (Candidate)",
    "Master of Laws, Business Law & Banking & Financial Services Law",
    "Juris Doctor, University of Windsor",
    "MBA, Finance & Accounting",
    "Chartered Privacy and Access Professional (CAPP)"
  ];

  const publications = [
    { title: "A Judicial 'SLAPP' To The Drafters Of Ontario's Anti-SLAPP Legislation: A Case Comment On 1704604 Ontario Ltd. v. Pointes Protection Assn.", url: "https://www.mondaq.com/canada/privacy-data-protection/514964/a-judicial-slapp-to-the-drafters-of-ontario39s-anti-slapp-legislation-a-case-comment-on-1704604-ontario-ltd-v-pointes-protection-assn" },
    { title: "Monetary Claims Based On Constructive Trust Cannot Be Registered on Title", url: "https://www.mondaq.com/canada/real-estate/613480/monetary-claims-based-on-constructive-trust-cannot-be-registered-on-title" },
    { title: "Snitches Don't Get Stitches: IPC Upholds Municipal Decision To Withhold Complainant Information Under MFIPPA", url: "https://www.mondaq.com/canada/privacy-data-protection/601678/snitches-don39t-get-stitches-ipc-upholds-municipal-decision-to-withhold-complainant-information-under-mfippa" },
    { title: "Federal Government Suspends CASL's Private Right of Action", url: "https://www.mondaq.com/canada/telecoms-media-it/600170/federal-government-suspends-casl39s-private-right-of-action" },
    { title: "No Collective Agreement, No Grievance: Arbitrators Lack Jurisdiction To Hear Grievances Arising Before a Collective Agreement Is In Effect", url: "https://www.mondaq.com/canada/arbitration--dispute-resolution/595568/no-collective-agreement-no-grievance-arbitrators-lack-jurisdiction-to-hear-grievances-arising-before-a-collective-agreement-is-in-effect" },
    { title: "Islamic Securitization: Structuring for Shari’ah Compliance", url: "#" }, // URL not found in search
    { title: "MOECC Proposing Amendments To Cap and Trade Program Regulation And Quantification, Reporting And Verification Of Greenhouse Gas Emissions Regulation", url: "#" }, // URL not found in search
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoImage} alt="Tim Harmar Legal" className="h-10 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'services', 'resources', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item
                        ? 'text-blue-900 border-b-2 border-teal-500'
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'services', 'resources', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-5xl md:text-7xl">TIM HARMAR</span>
              <br />
              <span className="text-2xl md:text-3xl text-teal-300">Legal & Consulting Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Strategic legal and consulting solutions for complex challenges in civil litigation, privacy, and economic development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Schedule Consultation <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                About Tim Harmar
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Award-winning lawyer with cross-functional experience in corporate, intellectual property, and privacy law, 
                as well as financial and process development consulting. Bringing cutting-edge expertise in civil litigation, 
                cybersecurity, and economic development to Sault Ste. Marie and beyond.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With a unique combination of legal expertise and business acumen, Tim provides strategic counsel that bridges 
                the gap between traditional legal practice and emerging challenges. He is also a Professor of International Business Law at Sault College.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Award className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Award-Winning</h3>
                  <p className="text-sm text-gray-600">Recognized legal excellence</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Community Leader</h3>
                  <p className="text-sm text-gray-600">Active in local development</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Educator</h3>
                  <p className="text-sm text-gray-600">Professor at Sault College</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Education & Credentials</h3>
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Specialized Legal & Consulting Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategic legal and consulting solutions for complex challenges, serving businesses and entrepreneurs 
              with a focus on civil litigation, privacy, and economic development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-teal-500 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting-Edge Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cutting-Edge Legal Technology
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the future of legal services with our innovative tools and AI-powered solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-teal-300 mr-3" />
                <h3 className="text-xl font-bold">AI Legal Assistant</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Get instant answers to legal questions with our AI-powered assistant available 24/7.
              </p>
              <div className="flex items-center text-teal-300">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm">Powered by Advanced AI</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-teal-300 mr-3" />
                <h3 className="text-xl font-bold">Smart Scheduling</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Intelligent appointment booking that adapts to your needs and Tim's availability.
              </p>
              <div className="flex items-center text-teal-300">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm">Real-time Availability</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-teal-300 mr-3" />
                <h3 className="text-xl font-bold">Document Generator</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Generate customized legal documents and templates tailored to your business needs.
              </p>
              <div className="flex items-center text-teal-300">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm">Instant Generation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Interactive Legal Tools
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our suite of interactive tools designed to streamline your legal experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <SmartScheduler />
            <DocumentGenerator />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LegalNewsFeed />
            <LegalAssessment />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Resources & Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore insights and thought leadership from Tim Harmar on key legal and consulting topics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{pub.title}</h3>
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline flex items-center gap-1">
                  Read More <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to discuss your legal needs? Contact Tim Harmar Legal & Consulting Services today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-teal-300" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">705-999-3657</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-teal-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">tharmar@timharmar.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Legal Matter</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-300">
                    <option value="">Select a service area</option>
                    <option value="cybersecurity">Cybersecurity & Privacy Law</option>
                    <option value="civil_litigation">Civil Litigation</option>
                    <option value="ip">Intellectual Property Law</option>
                    <option value="business_econ_dev">Business & Economic Development Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Brief description of your legal needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logoImage} alt="Tim Harmar Legal" className="h-12 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400">
                Strategic legal and consulting solutions for complex challenges.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cybersecurity & Privacy Law</li>
                <li>Civil Litigation</li>
                <li>Intellectual Property Law</li>
                <li>Business & Economic Development Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>tharmar@timharmar.com</p>
                <p>705-999-3657</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tim Harmar Legal & Consulting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Legal Assistant */}
      <AILegalAssistant />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-40"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

