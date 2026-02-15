
import React from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/sonnys-logo.jpg" alt="Sonny's Pool Services" className="h-10 w-auto rounded-full" />
              <span className="font-bold text-2xl tracking-tight">SONNY'S</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              Austin's locally owned pool care experts. We handle the chemistry and the sweat so you can just enjoy the splash.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', href: 'http://instagram.com/sonnyspools' },
                { name: 'Facebook', href: '#' },
              ].map(social => (
                <a key={social.name} href={social.href} aria-label={`Follow us on ${social.name}`} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors duration-200 cursor-pointer">
                  <span className="sr-only">{social.name}</span>
                  <div className="w-4 h-4 bg-white/20 rounded-sm" aria-hidden="true"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-azure-400 transition-colors duration-200 cursor-pointer">Weekly Cleaning</a></li>
              <li><a href="#services" className="hover:text-azure-400 transition-colors duration-200 cursor-pointer">Green Pool Recovery</a></li>
              <li><a href="#services" className="hover:text-azure-400 transition-colors duration-200 cursor-pointer">Pump & Filter Repair</a></li>
              <li><a href="#services" className="hover:text-azure-400 transition-colors duration-200 cursor-pointer">Salt Water Conversion</a></li>
              <li><a href="#services" className="hover:text-azure-400 transition-colors duration-200 cursor-pointer">Equipment Inspection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>{PHONE_NUMBER}</li>
              <li>{EMAIL_ADDRESS}</li>
              <li>Austin, Texas</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Sonny's Pool Services. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
