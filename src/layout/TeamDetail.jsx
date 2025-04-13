import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const TeamDetail = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h6 className="text-sm uppercase tracking-wider text-gray-600 mb-2 font-semibold">WHAT WE DO</h6>
          <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6">Innovation tailored for you</h1>
          
          {/* Breadcrumb */}
          <div className="flex justify-center items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#23A6F0] font-bold">Home</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-[#23A6F0]">Team</span>
          </div>
        </div>
      </div>
      
      {/* Team Gallery Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Grid Layout for Team Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Large Image - Left Side */}
            <div className="cursor-pointer relative group overflow-hidden h-[540px]">
              <img 
                src="/team1.png" 
                alt="Team Member" 
                className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold">FASHION</h3>
                  <p className="text-lg">COAT</p>
                </div>
              </div>
            </div>
            
            {/* Right Side Grid - 2x2 Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="cursor-pointer relative group overflow-hidden h-[260px]">
                <img 
                  src="/team2.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold">FASHION</h3>
                    <p className="text-lg">COAT</p>
                  </div>
                </div>
              </div>
              
              <div className="cursor-pointer relative group overflow-hidden h-[260px]">
                <img 
                  src="/team3.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold">FASHION</h3>
                    <p className="text-lg">COAT</p>
                  </div>
                </div>
              </div>
              
              <div className="cursor-pointer relative group overflow-hidden h-[260px]">
                <img 
                  src="/team4.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold">FASHION</h3>
                    <p className="text-lg">COAT</p>
                  </div>
                </div>
              </div>
              
              <div className="cursor-pointer relative group overflow-hidden h-[260px]">
                <img 
                  src="/team5.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold">FASHION</h3>
                    <p className="text-lg">COAT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Meet Our Team Section */}
        <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#252B42] mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/emrehoca.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Emre Şahiner</h4>
                <p className="text-[#737373] text-sm mb-4">Software Engineer</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/mustafa.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Mustafa Fidan</h4>
                <p className="text-[#737373] text-sm mb-4">Full Stack Developer</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/esram.jpeg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Esra Fidan</h4>
                <p className="text-[#737373] text-sm mb-4">Graphic Designer / Full-Time Lover</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/teamuser4.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Username</h4>
                <p className="text-[#737373] text-sm mb-4">Profession</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/teamuser5.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Username</h4>
                <p className="text-[#737373] text-sm mb-4">Profession</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/teamuser6.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Username</h4>
                <p className="text-[#737373] text-sm mb-4">Profession</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 7 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/teamuser7.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Username</h4>
                <p className="text-[#737373] text-sm mb-4">Profession</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 8 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/teamuser8.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Username</h4>
                <p className="text-[#737373] text-sm mb-4">Profession</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 9 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110">
              <img src="/teamuser9.jpg" alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-lg font-bold text-[#252B42]">Username</h4>
                <p className="text-[#737373] text-sm mb-4">Profession</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-[#23A6F0] hover:text-blue-700">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Trial Section */}
      <div className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#252B42] mb-4">Start your 14 days free trial</h2>
          <p className="text-gray-600 mb-8 mx-auto max-w-xl">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
          </p>
          
          <Link to="/pricing" className="inline-block bg-[#23A6F0] text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Try it free now
          </Link>
          
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[#23A6F0] hover:text-blue-700">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>


      


      
    </div>
  );
};

export default TeamDetail;