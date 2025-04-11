import React from 'react';
import { Link } from 'react-router-dom';

const PageContent = () => {
  return (
    <div className="container mx-auto px-4 py-10 w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-2/5 p-8 md:p-12 z-10 md:pr-0 md:pl-16">
            <div className="text-[#23A6F0] font-medium mb-4 px-0.5">SUMMER 2020</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6">NEW COLLECTION</h1>
            <p className="text-[#737373] mb-10 max-w-md">
              We know how large objects will act, but things on a small scale.
            </p>
            <Link 
              to="/shop" 
              className="inline-block bg-[#23A6F0] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1A8CD8] transition duration-300"
            >
              SHOP NOW
            </Link>
          </div>
          
          {/* Right Content - Image */}
          <div className="w-full md:w-3/5 relative">
            <img 
              src="/hero.png" 
              alt="New Collection - Summer 2020" 
              className="w-full h-auto object-cover object-center md:h-[500px]"
            />
            
            {/* Decorative Circles */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full opacity-70 -mr-10"></div>
          </div>
        </div>
      </div>
      
      {/* Brand Logos Section */}
      <div className="py-10">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <img src="/amazon.png" alt="Amazon" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/reddit.png" alt="Reddit" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/stripe.png" alt="Stripe" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/leaf.png" alt="Leaf" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/lyft.png" alt="Lyft" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/hooli.png" alt="Hooli" className="h-8 md:h-10 object-contain cursor-pointer" />
        </div>
      </div>
      
            {/* Featured Products Grid */}
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-0">
          {/* Large Product Card - Left */}
          <div className="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[605px] w-full">
            <img 
              src="/weekprod1.jpg" 
              alt="Featured Product" 
              className="w-full h-full object-cover object-center sm:object-center"
            />
            <div className="absolute w-full bottom-0 left-0 bg-[#2D8BC0BF] bg-opacity-100 p-4 sm:p-6 md:p-8 md:px-10 lg:px-20 max-w-full md:max-w-[550px]">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4">
                <span className="block">Top Product Of</span>
                <span className="block">the Week</span>
              </h3>
              <Link 
                to="/shop" 
                className="inline-block border-2 border-white text-white font-medium py-1 px-4 sm:py-2 sm:px-6 rounded-md hover:bg-white hover:text-[#23A6F0] transition duration-300 mt-2 md:mt-4 w-max text-sm sm:text-base"
              >
                EXPLORE ITEMS
              </Link>
            </div>
          </div>
          
          {/* Right Column - Two Smaller Cards */}
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {/* Top Right Card */}
            <div className="relative overflow-hidden h-[200px] sm:h-[240px] md:h-[290px] w-full">
              <img 
                src="/weekprod2.jpg" 
                alt="Featured Product" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute w-full bottom-0 left-0 bg-[#2D8BC0BF] bg-opacity-100 p-3 sm:p-4 max-w-full sm:max-w-[290px]">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Top Product Of the Week</h3>
                <Link 
                  to="/shop" 
                  className="inline-block border-2 border-white text-white font-medium py-1 px-3 sm:py-2 sm:px-6 rounded-md hover:bg-white hover:text-[#23A6F0] transition duration-300 mt-1 sm:mt-2 w-max text-xs sm:text-sm md:text-base"
                >
                  EXPLORE ITEMS
                </Link>
              </div>
            </div>
            
            {/* Bottom Right Card */}
            <div className="relative overflow-hidden h-[200px] sm:h-[240px] md:h-[290px] w-full">
              <img 
                src="/weekprod3.jpg" 
                alt="Featured Product" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] bg-opacity-100 p-3 sm:p-4 max-w-full sm:max-w-[300px]">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Top Product Of the Week</h3>
                <Link 
                  to="/shop" 
                  className="inline-block border-2 border-white text-white font-medium py-1 px-3 sm:py-2 sm:px-6 rounded-md hover:bg-white hover:text-[#23A6F0] transition duration-300 mt-1 sm:mt-2 w-max text-xs sm:text-sm md:text-base"
                >
                  EXPLORE ITEMS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bestseller Products Section */}
      <div className="py-16">
        <div className="text-center mb-12">
          <p className="text-[#23A6F0] font-medium mb-2">Featured Products</p>
          <h2 className="text-3xl font-bold text-[#252B42] mb-2">BESTSELLER PRODUCTS</h2>
          <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Product 1 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product1.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product2.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product3.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 4 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product4.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 5 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product5.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 6 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product6.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 7 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product7.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 8 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product8.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 9 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product9.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
          
          {/* Product 10 */}
          <div className="group">
            <div className="bg-[#F9F9F9] mb-4">
              <img src="/product10.png" alt="Product" className="w-full h-[360px] object-cover" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="border-2 border-[#23A6F0] cursor-pointer text-[#23A6F0] font-medium py-3 px-8 rounded-md hover:bg-[#23A6F0] hover:text-white transition duration-300">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
      {/* We Love What We Do Section */}
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[700px]">
              <img 
                src="/foto1.png" 
                alt="Happy Customer" 
                className="w-full h-full object-cover "
              />
            </div>
            <div className="h-[700px]">
              <img 
                src="/foto2.png" 
                alt="Customer with Headphones" 
                className="w-full h-full object-cover "
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="px-4 md:px-8">
            <p className="text-[#23A6F0] font-medium mb-2">Featured Products</p>
            <h2 className="text-4xl font-bold text-[#252B42] mb-6">We love what we do</h2>
            
            <div className="space-y-4">
              <p className="text-[#737373]">
                Problems trying to resolve the conflict between 
                the two major realms of Classical physics: 
                Newtonian mechanics.
              </p>
              
              <p className="text-[#737373]">
                Problems trying to resolve the conflict between 
                the two major realms of Classical physics: 
                Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Best Services Section*/}
      <div className="py-16">
        <div className="text-center mb-16">
          <p className="text-[#23A6F0] font-medium mb-2">Featured Products</p>
          <h2 className="text-3xl font-bold text-[#252B42] mb-2">THE BEST SERVICES</h2>
          <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 - Easy Wins */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[#23A6F0] mb-5">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.75 22.5H58.5V38.25H42.75V22.5Z" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 22.5H29.25V38.25H13.5V22.5Z" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 51.75H29.25V67.5H13.5V51.75Z" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M42.75 51.75H58.5V67.5H42.75V51.75Z" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#252B42] mb-2">Easy Wins</h3>
            <p className="text-[#737373] max-w-xs">
              Get your best looking smile now!
            </p>
          </div>
          
          {/* Service 2 - Concrete */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[#23A6F0] mb-5">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 24V58.587C6 58.587 19.863 58.587 36 58.587C52.137 58.587 66 58.587 66 58.587V24" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M66 38.8261H6" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 38.8261V58.5869" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 38.8261V58.5869" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M42 38.8261V58.5869" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M54 38.8261V58.5869" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36 13.4131L66 24.0001L36 34.5871L6 24.0001L36 13.4131Z" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#252B42] mb-2">Concrete</h3>
            <p className="text-[#737373] max-w-xs">
              Defalcate is most focused in helping you discover your most beautiful smile
            </p>
          </div>
          
          {/* Service 3 - Hack Growth */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[#23A6F0] mb-5">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.7599 19.86L37.1999 48.42L23.9999 35.22L6.23993 52.98" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M65.7599 37.98V19.86H47.6399" stroke="#23A6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#252B42] mb-2">Hack Growth</h3>
            <p className="text-[#737373] max-w-xs">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>
      
       {/* Practice Advice Section*/}
    <div className="py-12">
        <div className="text-center mb-16">
          <p className="text-[#23A6F0] font-medium mb-2">Practice Advice</p>
          <h2 className="text-3xl font-bold text-[#252B42] mb-2">Featured Posts</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Featured Post 1 */}
          <div className="bg-white w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
            <div className="relative md:w-2/5 h-[200px] md:h-auto">
              <img 
                src="/grafik1.png" 
                alt="Featured Post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#E74040] text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-[#252B42] text-white text-xs font-bold px-2 py-1 rounded-full">⭐ 4.9</span>
              </div>
            </div>
            <div className="p-4 md:p-6 md:w-3/5">
              <div className="flex items-center mb-3">
                <span className="text-sm text-[#23A6F0] mr-4">English Department</span>
              </div>
              <h3 className="text-xl font-bold text-[#252B42] mb-3">Graphic Design</h3>
              <p className="text-sm  text-[#737373] mb-3">
                We focus on ergonomics and 
                meeting you where you work. It's 
                only a keystroke away.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                <img 
                src="/sales.png" 
                alt="Featured Post" 
                className="w-4 h-4 object-cover mr-1"
              />
                  <span className="text-sm text-[#737373]">15 Sales</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-[#BDBDBD] line-through mr-1">$16.48 </span>
                  <span className="text-sm text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                </div>
              </div>
              <div className="flex flex-wrap items-center text-xs text-[#737373] mb-4 gap-2">
                <div className="flex items-center mr-2">
                  <img 
                    src="/22hours.png" 
                    alt="22 Hours" 
                    className="w-4 h-4 mr-1"
                  />
                  <span>22h...</span>
                </div>
                <div className="flex items-center mr-2">
                  <img 
                    src="/64lesson.png" 
                    alt="64 Lessons" 
                    className="w-4 h-4 mr-1"
                  />
                  <span>64 Lessons</span>
                </div>
                <div className="flex items-center">
                  <img 
                    src="/progress.png" 
                    alt="Progress" 
                    className="w-4 h-4 mr-1"
                  />
                  <span>Progress</span>
                </div>
              </div>
              <Link 
                to="/post" 
                className="mt-4 inline-block text-[#23A6F0] font-medium px-4 py-2 border border-[#23A6F0] rounded-full hover:bg-[#23A6F0] hover:text-white transition-all text-sm"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          {/* Featured Post 2 */}
          <div className="bg-white w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
            <div className="relative md:w-2/5 h-[200px] md:h-auto">
              <img 
                src="/grafik2.png" 
                alt="Featured Post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#E74040] text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-[#252B42] text-white text-xs font-bold px-2 py-1 rounded-full">⭐ 4.9</span>
              </div>
            </div>
            <div className="p-4 md:p-6 md:w-3/5">
              <div className="flex items-center mb-3">
                <span className="text-sm text-[#23A6F0] mr-4">English Department</span>
              </div>
              <h3 className="text-xl font-bold text-[#252B42] mb-3">Graphic Design</h3>
              <p className="text-sm  text-[#737373] mb-3">
                We focus on ergonomics and 
                meeting you where you work. It's 
                only a keystroke away.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                <img 
                src="/sales.png" 
                alt="Featured Post" 
                className="w-4 h-4 object-cover mr-1"
              />
                  <span className="text-sm text-[#737373]"> 15 Sales</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-[#BDBDBD] line-through mr-1">$16.48</span>
                  <span className="text-sm text-[#23856D] font-bold">$6.48</span>
                </div>
              </div> 
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                </div>
              </div>
              <div className="flex flex-wrap items-center text-xs text-[#737373] mb-4 gap-2">
                <div className="flex items-center mr-2">
                  <img 
                    src="/22hours.png" 
                    alt="22 Hours" 
                    className="w-4 h-4 mr-1"
                  />
                  <span>22h...</span>
                </div>
                <div className="flex items-center mr-2">
                  <img 
                    src="/64lesson.png" 
                    alt="64 Lessons" 
                    className="w-4 h-4 mr-1"
                  />
                  <span>64 Lessons</span>
                </div>
                <div className="flex items-center">
                  <img 
                    src="/progress.png" 
                    alt="Progress" 
                    className="w-4 h-4 mr-1"
                  />
                  <span>Progress</span>
                </div>
              </div>
              <Link 
                to="/post" 
                className="mt-4 inline-block text-[#23A6F0] font-medium px-4 py-2 border border-[#23A6F0] rounded-full hover:bg-[#23A6F0] hover:text-white transition-all text-sm"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PageContent;