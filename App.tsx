
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import ChatAssistant from './components/ChatAssistant';
import { Mail, Github, Linkedin, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="pt-32 pb-16 bg-zinc-950 border-t border-zinc-900">
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-xl font-bold text-white tracking-[0.2em] italic uppercase">Nihilo</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-10 font-light leading-relaxed">
            Architecting the future of enterprise automation. Principals-led engineering for AI and Cloud Native environments.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Technical Services</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-light">
            <li><a href="#services" className="hover:text-white transition-colors">AI Engineering</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Workflow Automation</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">AWS/Azure Design</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Security Audits</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Access_Point</h4>
          <ul className="space-y-6 text-zinc-500 text-sm font-light">
            <li className="flex items-start space-x-3">
              <Mail size={16} className="text-zinc-400 mt-1" />
              <span>eng@nihilosolutions.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-zinc-400 mt-1" />
              <span>San Francisco, CA</span>
            </li>
            <li className="flex items-start space-x-3">
              <Globe size={16} className="text-zinc-400 mt-1" />
              <span>nihilo.solutions</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[10px] mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} NIHILO SOLUTIONS INC. // ESTABLISHED MMXXIV.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-400 transition-colors">PRIVACY_PROTOCOL</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">TERMS_OF_ENGAGEMENT</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
