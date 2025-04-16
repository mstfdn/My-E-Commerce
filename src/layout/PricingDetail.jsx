import React from 'react';
import { Link } from 'react-router-dom';

const PricingDetail = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h6 className="text-sm uppercase tracking-wider text-gray-600 mb-2 font-semibold">PRICING</h6>
          <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6">Simple Pricing</h1>
          
          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#23A6F0] font-bold">Home</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-[#23A6F0]">Pricing</span>
          </div>
        </div>
      </div>

      {/* Pricing Toggle Section */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4">
            <span className="font-bold text-[#252B42]">Monthly</span>
            <div className="relative inline-block w-12 h-6 bg-gray-200 rounded-full cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
              <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer z-10" />
            </div>
            <span className="text-gray-500">Yearly</span>
            <span className="bg-[#23A6F0] text-white text-xs py-1 px-2 rounded">Save 25%</span>
          </div>
        </div>
      </div>
      
      {/* Pricing Plans Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-[#252B42] mb-4">Pricing</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Problems trying to resolve the conflict between 
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border border-[#23A6F0] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#252B42] mb-4">FREE</h3>
                <p className="text-gray-600 mb-6">Organize across all apps by hand</p>
                
                <div className="flex justify-center items-center mb-8">
                  <span className="text-[#23A6F0] text-5xl font-bold">0</span>
                  <div className="ml-2 flex flex-col items-start">
                    <span className="text-[#23A6F0] font-bold text-2xl">$</span>
                    <span className="text-gray-600 text-sm">Per Month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-600">Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-600">Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-600">Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-400 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <span className="text-gray-400">1GB Cloud storage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-400 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <span className="text-gray-400 text-left">Email and community support</span>
                  </li>
                </ul>
                
                <button className="w-full bg-[#252B42] text-white py-3 px-8 hover:bg-gray-800 transition-shadow cursor-pointer">
                  Try for free
                </button>
              </div>
            </div>
            
            {/* Standard Plan */}
            <div className="border-0 rounded-lg overflow-hidden bg-[#252B42] text-white hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">STANDARD</h3>
                <p className="text-gray-300 mb-6">Organize across all apps by hand</p>
                
                <div className="flex justify-center items-center mb-8">
                  <span className="text-[#23A6F0] text-5xl font-bold">9.99</span>
                  <div className="ml-2 flex flex-col items-start">
                    <span className="text-[#23A6F0] font-bold text-2xl">$</span>
                    <span className="text-gray-300 text-sm">Per Month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>1GB Cloud storage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-400 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <span className="text-gray-400 text-left">Email and community support</span>
                  </li>
                </ul>
                
                <button className="w-full bg-[#23A6F0] text-white py-3 px-8 hover:bg-blue-600 transition cursor-pointer">
                  Try for free
                </button>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="border border-[#23A6F0] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#252B42] mb-4">PREMIUM</h3>
                <p className="text-gray-600 mb-6">Organize across all apps by hand</p>
                
                <div className="flex justify-center items-center mb-8">
                  <span className="text-[#23A6F0] text-5xl font-bold">19.99</span>
                  <div className="ml-2 flex flex-col items-start">
                    <span className="text-[#23A6F0] font-bold text-2xl">$</span>
                    <span className="text-gray-600 text-sm">Per Month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-600">Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-600">Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#2DC071] rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-600">Unlimited product updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-400 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <span className="text-gray-400">1GB Cloud storage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-400 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <span className="text-gray-400 text-left">Email and community support</span>
                  </li>
                </ul>
                
                <button className="w-full bg-[#23A6F0] text-white py-3 px-8 hover:bg-blue-600 transition cursor-pointer">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted Companies Logo Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-[#252B42] mb-12">Trusted By Over 4000 Big Companies</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="/hooli.png" alt="Hooli" className="h-8 opacity-60 cursor-pointer" />
            <img src="/lyft.png" alt="Lyft" className="h-8 opacity-60 cursor-pointer" />
            <img src="/leaf.png" alt="Leaf" className="h-8 opacity-60 cursor-pointer" />
            <img src="/stripe.png" alt="Stripe" className="h-8 opacity-60 cursor-pointer" />
            <img src="/amazon.png" alt="AWS" className="h-8 opacity-60 cursor-pointer" />
            <img src="/reddit.png" alt="Reddit" className="h-8 opacity-60 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Pricing FAQs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#252B42] mb-4">Pricing FAQs</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Problems trying to resolve the conflict between 
              the two major realms of Classical physics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="cursor-pointer border-l-4 border-[#23A6F0] pl-4 hover:shadow-md p-4 transition-shadow">
              <h3 className="text-lg font-bold text-[#252B42] mb-2 flex items-center">
                <span className="text-[#23A6F0] mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="cursor-pointer border-l-4 border-[#23A6F0] pl-4 hover:shadow-md p-4 transition-shadow">
              <h3 className="text-lg font-bold text-[#252B42] mb-2 flex items-center">
                <span className="text-[#23A6F0] mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="cursor-pointer border-l-4 border-[#23A6F0] pl-4 hover:shadow-md p-4 transition-shadow">
              <h3 className="text-lg font-bold text-[#252B42] mb-2 flex items-center">
                <span className="text-[#23A6F0] mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="cursor-pointer border-l-4 border-[#23A6F0] pl-4 hover:shadow-md p-4 transition-shadow">
              <h3 className="text-lg font-bold text-[#252B42] mb-2 flex items-center">
                <span className="text-[#23A6F0] mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="cursor-pointer border-l-4 border-[#23A6F0] pl-4 hover:shadow-md p-4 transition-shadow">
              <h3 className="text-lg font-bold text-[#252B42] mb-2 flex items-center">
                <span className="text-[#23A6F0] mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="cursor-pointer border-l-4 border-[#23A6F0] pl-4 hover:shadow-md p-4 transition-shadow">
              <h3 className="text-lg font-bold text-[#252B42] mb-2 flex items-center">
                <span className="text-[#23A6F0] mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 text-sm">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 cursor-pointer">Haven't got your answer? Contact our support</p>
          </div>
        </div>
      </div>
      

      {/* Call to Action Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-3xl font-bold text-[#252B42] mb-4">Start your 14 days free trial</h2>
          <p className="text-gray-600 mb-8">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
          </p>
          <button className="bg-[#23A6F0] text-white py-3 px-8 rounded-md hover:bg-blue-600 transition mb-8 cursor-pointer">
            Try it free now
          </button>
          
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetail;