
import React from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-azure-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-tight">AZURE</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              We provide the highest quality pool care in Central Florida. Our mission is to handle the science and the sweat, so you can just enjoy the splash.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'X'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-azure-400 transition-colors">Weekly Cleaning</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Green Pool Recovery</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Acid Washing</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Equipment Repair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>{PHONE_NUMBER}</li>
              <li>{EMAIL_ADDRESS}</li>
              <li>Orlando, Florida</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Azure Pool Care LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
