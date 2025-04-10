import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="tel:(225) 555-0118" className="flex items-center gap-1 text-sm">
                <Phone size={16} />
                <span className="hidden sm:inline">(225) 555-0118</span>
              </a>
              <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-1 text-sm">
                <Mail size={16} />
                <span className="hidden sm:inline">michelle.rivera@example.com</span>
              </a>
            </div>
            
            {/* Promo Text */}
            <div className="hidden md:block text-sm">
              Follow Us and get a chance to win 80% off
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <span className="text-sm hidden sm:inline">Follow Us :</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-gray-200"><Instagram size={16} /></a>
                <a href="#" className="hover:text-gray-200"><Youtube size={16} /></a>
                <a href="#" className="hover:text-gray-200"><Facebook size={16} /></a>
                <a href="#" className="hover:text-gray-200"><Twitter size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#252B42]">
              <Link to="/">Bandage</Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-[#737373] hover:text-[#23A6F0] font-medium">Home</Link>
              <Link to="/shop" className="text-[#737373] hover:text-[#23A6F0] font-medium">Shop</Link>
              <Link to="/about" className="text-[#737373] hover:text-[#23A6F0] font-medium">About</Link>
              <Link to="/blog" className="text-[#737373] hover:text-[#23A6F0] font-medium">Blog</Link>
              <Link to="/contact" className="text-[#737373] hover:text-[#23A6F0] font-medium">Contact</Link>
              <Link to="/pages" className="text-[#737373] hover:text-[#23A6F0] font-medium">Pages</Link>
            </nav>
            
            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/login" className="text-[#23A6F0] hover:underline">Login / Register</Link>
              <div className="flex items-center space-x-4">
                <Link to="/search" className="text-[#23A6F0]">
                  <Search size={20} />
                </Link>
                <Link to="/cart" className="text-[#23A6F0] relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                </Link>
                <Link to="/wishlist" className="text-[#23A6F0] relative">
                  <Heart size={20} />
                  <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-[#737373] hover:text-[#23A6F0] font-medium py-2">Home</Link>
                <Link to="/shop" className="text-[#737373] hover:text-[#23A6F0] font-medium py-2">Shop</Link>
                <Link to="/about" className="text-[#737373] hover:text-[#23A6F0] font-medium py-2">About</Link>
                <Link to="/blog" className="text-[#737373] hover:text-[#23A6F0] font-medium py-2">Blog</Link>
                <Link to="/contact" className="text-[#737373] hover:text-[#23A6F0] font-medium py-2">Contact</Link>
                <Link to="/pages" className="text-[#737373] hover:text-[#23A6F0] font-medium py-2">Pages</Link>
              </nav>
              <div className="mt-4 flex flex-col space-y-3">
                <Link to="/login" className="text-[#23A6F0] hover:underline py-2">Login / Register</Link>
                <div className="flex items-center space-x-4 py-2">
                  <Link to="/search" className="text-[#23A6F0]">
                    <Search size={20} />
                  </Link>
                  <Link to="/cart" className="text-[#23A6F0] relative">
                    <ShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                  </Link>
                  <Link to="/wishlist" className="text-[#23A6F0] relative">
                    <Heart size={20} />
                    <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;