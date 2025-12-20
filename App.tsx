
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import ChatAssistant from './components/ChatAssistant';
import { Mail, Github, Twitter, Linkedin, MapPin, Globe, Server } from 'lucide-react';

const Footer: React.FC = () => (
  <footer id="contact" className="pt-32 pb-16 bg-zinc-950 border-t border-zinc-900">
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-xl font-bold text-white tracking-[0.2em] italic uppercase">Nihilo</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-10 font-light leading-relaxed">
            Engineering resilient digital futures through custom AI solutions and automated cloud architectures. From San Francisco to the world.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Technical Links</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-light">
            <li><a href="#" className="hover:text-white transition-colors">AI Research</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AWS Architecture</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Azure Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Workflow Whitepapers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] mono uppercase tracking-[0.3em] text-white mb-8">Contact_Manifest</h4>
          <ul className="space-y-6 text-zinc-500 text-sm font-light">
            <li className="flex items-start space-x-3">
              <Mail size={16} className="text-zinc-400 mt-1" />
              <span>eng@nihilosolutions.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-zinc-400 mt-1" />
              <span>600 California St, <br />San Francisco, CA 94108</span>
            </li>
            <li className="flex items-start space-x-3">
              <Globe size={16} className="text-zinc-400 mt-1" />
              <span>nihilo.solutions</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[10px] mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} NIHILO SOLUTIONS INC. // ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-400 transition-colors">PRIVACY_POLICY</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">TERMS_OF_SERVICE</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">SLA_V2</a>
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
      <Stats />
      <Portfolio />
      
      {/* Redesigned Professional CTA Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="relative border border-zinc-800 bg-zinc-900/10 p-16 md:p-32 text-center overflow-hidden">
             {/* Subtlest background texture */}
            <div className="absolute inset-0 grid-bg opacity-10"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <Server size={48} className="mx-auto text-zinc-700 mb-10" />
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Automate Your Operations with Precision</h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                Connect with our engineering team to audit your current workflows and design a custom AI roadmap tailored for AWS or Azure.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all">
                  Request Technical Audit
                </button>
                <button className="w-full sm:w-auto px-12 py-5 border border-zinc-800 text-white font-bold uppercase text-xs tracking-widest hover:bg-zinc-800 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
