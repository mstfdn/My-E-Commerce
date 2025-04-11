import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Logo and Social Media */}
        <div className="flex justify-between items-center mb-12 border-b border-gray-300 pb-6">
          <h2 className="text-2xl font-bold">Bandage</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-[#23A6F0]" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="text-[#23A6F0]" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" className="text-[#23A6F0]" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 gap-y-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-[#252B42] mb-5">Company Info</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[#737373] hover:text-[#23A6F0]">About Us</Link></li>
              <li><Link to="/careers" className="text-[#737373] hover:text-[#23A6F0]">Carrier</Link></li>
              <li><Link to="/blog" className="text-[#737373] hover:text-[#23A6F0]">We are hiring</Link></li>
              <li><Link to="/blog" className="text-[#737373] hover:text-[#23A6F0]">Blog</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-[#252B42] mb-5">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[#737373] hover:text-[#23A6F0]">About Us</Link></li>
              <li><Link to="/careers" className="text-[#737373] hover:text-[#23A6F0]">Carrier</Link></li>
              <li><Link to="/blog" className="text-[#737373] hover:text-[#23A6F0]">We are hiring</Link></li>
              <li><Link to="/blog" className="text-[#737373] hover:text-[#23A6F0]">Blog</Link></li>
            </ul>
          </div>
          
          {/* Features */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-[#252B42] mb-5">Features</h3>
            <ul className="space-y-3">
              <li><Link to="/business" className="text-[#737373] hover:text-[#23A6F0]">Business Marketing</Link></li>
              <li><Link to="/user" className="text-[#737373] hover:text-[#23A6F0]">User Analytic</Link></li>
              <li><Link to="/live-chat" className="text-[#737373] hover:text-[#23A6F0]">Live Chat</Link></li>
              <li><Link to="/support" className="text-[#737373] hover:text-[#23A6F0]">Unlimited Support</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-[#252B42] mb-5">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/ios" className="text-[#737373] hover:text-[#23A6F0]">IOS & Android</Link></li>
              <li><Link to="/watch-demo" className="text-[#737373] hover:text-[#23A6F0]">Watch a Demo</Link></li>
              <li><Link to="/customers" className="text-[#737373] hover:text-[#23A6F0]">Customers</Link></li>
              <li><Link to="/api" className="text-[#737373] hover:text-[#23A6F0]">API</Link></li>
            </ul>
          </div>
          
          {/* Get In Touch */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-[#252B42] mb-5">Get In Touch</h3>
            <div className="flex max-w-[350px]">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-2 py-2 border border-[#E6E6E6] rounded-l focus:outline-none text-sm"
              />
              <button className="bg-[#23A6F0] text-white px-3 py-2 rounded-r whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#737373] mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-[#737373] pt-6">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;