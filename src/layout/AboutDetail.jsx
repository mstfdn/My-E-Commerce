import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const AboutDetail = () => {
  return (
    <div className="container mx-auto px-4 py-10 w-full">
      {/* Hero Section */}
      <div className="relative  from-[#96E9FB] to-[#ABECD6] rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
        <div className="flex flex-col px-4 py-8 sm:items-start sm:text-left items-center text-center">
            <div className="text-[#000000] font-medium mb-4 px-0.5 ml-3 sm:ml-3">ABOUT COMPANY</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-6 ml-3 sm:ml-3">ABOUT US</h1>
            <p className="text-[#737373] mb-10 max-w-md mx-auto sm:mx-0 ml-3 sm:ml-3">
                We know how large objects will act, but things on a small scale.
            </p>
            <Link 
                to="/about" 
                className="inline-block bg-[#23a5f0] text-white font-bold py-3 px-8 ml-3 sm:ml-3 rounded-md hover:bg-[#1A8CD8] transition duration-300"
            >
                Get Quote Now
            </Link>
        </div>
          
          {/* Right Content - Image */}
          <div className=" w-full md:w-3/5 relative">
            <img 
              src="/abouthero.png" 
              alt="About Us" 
              className="w-full h-auto object-cover object-top md:object-center md:h-[500px] rounded"
            />
          </div>
        </div>
      </div>

      {/* Problem Trying Section */}
    <div className="container mx-auto px-4 mt-8 py-12">
    {/* Üst kısım - Başlık ve Açıklama */}
        <div className="flex flex-col md:flex-row mb-20">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <p className="text-red-500 text-sm mb-2">Problems trying</p>
            <h2 className="text-3xl font-bold text-gray-800">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
            </div>
            <div className="w-full md:w-1/2 md:pl-12 mt-8">
            <p className="text-gray-600">
                Problems trying to resolve the conflict between the two major realms of
                Classical physics: Newtonian mechanics
            </p>
            </div>
        </div>

    {/* Alt kısım - İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* İstatistik 1 */}
            <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">15K</h3>
            <p className="text-gray-600 text-center">Happy Customers</p>
            </div>

            {/* İstatistik 2 */}
            <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">150K</h3>
            <p className="text-gray-600 text-center">Monthly Visitors</p>
            </div>

            {/* İstatistik 3 */}
            <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">15</h3>
            <p className="text-gray-600 text-center">Countries Worldwide</p>
            </div>

            {/* İstatistik 4 */}
            <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">100+</h3>
            <p className="text-gray-600 text-center">Top Partners</p>
            </div>
        </div>
    </div>
    {/* Video Section */}
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden my-8">
        {/* Ana görsel */}
        <img 
            src="/public/video.png" 
            alt="Dağ manzarası ve göl" 
            className="w-full h-auto rounded-lg"
        />
  
        {/* Oynat butonu - ortada konumlandırılmış */}
        <div className="absolute inset-0 flex items-center justify-center">
            <img 
            src="/public/videobuton.png" 
            alt="Video oynat" 
            className="w-16 h-16 cursor-pointer hover:scale-110 transition-transform"
            />
        </div>
    </div>
    {/* Team Section */}
    <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#252B42] mb-12">Meet Our Team</h2>
    </div>
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
    </div>
    {/* Big Companies Section */}
        <div className="bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Big Companies Are Here</h2>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                Problems trying to resolve the conflict between
                <br />
                the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
        </div>
        {/* Brand Logos Section */}
        <div className="py-10 bg-gray-50">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <img src="/amazon.png" alt="Amazon" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/reddit.png" alt="Reddit" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/stripe.png" alt="Stripe" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/leaf.png" alt="Leaf" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/lyft.png" alt="Lyft" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/hooli.png" alt="Hooli" className="h-8 md:h-10 object-contain cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

export default AboutDetail;