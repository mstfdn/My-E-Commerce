import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';

const ContactDetail = () => {
  return (
    <div className="w-full px-4 md:container md:mx-auto md:px-25 py-2">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="w-full md:w-1/5 text-center md:text-left mb-8 md:mb-50">
          <h5 className="text-md font-bold text-gray-800 mb-4 mt-5 uppercase">CONTACT US</h5>
          <h1 className="text-4xl font-bold text-gray-900 mb-5">Get in touch today!</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-gray-800 font-bold">Phone : +451 215 215</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-gray-800 font-bold">Fax : +451 215 215</span>
            </div>
            
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <a href="#" className="text-gray-800 cursor-pointer">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-800 cursor-pointer">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-800 cursor-pointer">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-800 cursor-pointer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full relative hidden md:block">
          <img 
            src="/contacthero.png" 
            alt="Happy family shopping" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      
      {/* Contact Info Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <p className="text-sm text-blue-500 uppercase font-bold mb-2">VISIT OUR OFFICE</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We help small businesses<br />with big ideas</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Contact */}
          <div className="text-center">
            <div className="flex justify-center mb-6 cursor-pointer">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <Phone className="text-blue-500" size={32} />
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-1">georgia.young@example.com</p>
            <p className="text-sm text-gray-700 mb-4">georgia.young@ple.com</p>
            <p className="font-medium mb-4 ">Get Support</p>
            <button className="border border-blue-500 text-blue-500 rounded-full px-6 py-2 hover:bg-blue-50 transition cursor-pointer">
              Submit Request
            </button>
          </div>
          
          {/* Location Contact */}
          <div className="text-center bg-[#252B42] text-white py-8 px-2 rounded-lg">
            <div className="flex justify-center mb-6 cursor-pointer">
              <div className="bg-blue-500 p-4 rounded-full">
                <MapPin className="text-white" size={32} />
              </div>
            </div>
            <p className="text-sm mb-1">georgia.young@example.com</p>
            <p className="text-sm mb-4">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-blue-500 bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition cursor-pointer">
              Submit Request
            </button>
          </div>
          
          {/* Email Contact */}
          <div className="text-center">
            <div className="flex justify-center mb-6 cursor-pointer">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <Mail className="text-blue-500" size={32} />
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-1">georgia.young@example.com</p>
            <p className="text-sm text-gray-700 mb-4">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-blue-500 text-blue-500 rounded-full px-6 py-2 hover:bg-blue-50 transition cursor-pointer">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      
      {/* Let's Talk Section */}
      <div className="text-center py-16 mb-16 relative">
        <img 
          src="/ok2.png" 
          alt="Arrow pointing down" 
          className="w-16 h-16 mx-auto mb-4"
        />
        <p className="text-sm font-bold text-gray-800 mb-4">WE Can't WAIT TO MEET YOU</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-8">Let's Talk</h2>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition cursor-pointer">
          Try it free now
        </button>
      </div>
      
    </div>
  );
};

export default ContactDetail;