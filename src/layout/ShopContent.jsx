import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ShopContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Shop Header */}
      <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#252B42]">Shop</h1>
        <div className="flex items-center text-[#737373]">
          <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-[#23A6F0]">Shop</span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="relative group overflow-hidden rounded">
          <img 
            src="/card1.png" 
            alt="Clothes Category" 
            className="cursor-pointer w-[260px] h-[260px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="relative group overflow-hidden rounded">
          <img 
            src="/card2.png" 
            alt="Clothes Category" 
            className="cursor-pointer w-[260px] h-[260px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="relative group overflow-hidden rounded">
          <img 
            src="/card3.png" 
            alt="Clothes Category" 
            className="cursor-pointer w-[260px] h-[260px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="relative group overflow-hidden rounded">
          <img 
            src="/card4.png" 
            alt="Clothes Category" 
            className="cursor-pointer w-[260px] h-[260px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="relative group overflow-hidden rounded">
          <img 
            src="/card5.png" 
            alt="Clothes Category" 
            className="cursor-pointer w-[260px] h-[260px] object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      {/* Filter Section */}
      <div className="flex flex-wrap justify-between items-center mb-8 bg-[#FAFAFA] p-4 rounded">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-[#737373]">Showing all 12 results</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-sm  text-[#737373] mr-2">Views:</span>
            <div className="flex space-x-2">
                <button className="p-1 text-[#252B42]rounded cursor-pointer">
                    <img src="/filtre1.png" alt="" />
                </button>
                <button className="p-1 text-[#737373] cursor-pointer">
                    <img src="/filtre2.png" alt="" />
                </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <select className="appearance-none cursor-pointer bg-[#F9F9F9] border border-[#DDDDDD] rounded px-4 py-2 pr-8 text-sm text-[#737373] focus:outline-none">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#737373]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            
            <button className="bg-[#23A6F0] text-white px-6 py-2 rounded text-sm cursor-pointer hover:bg-blue-500">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {/* Product 1 */}
        <Link to="/product/1">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun1.png" alt="Product" className="w-[239px] h-[300px] object-cover cursor-pointer transition-transform hover:scale-105"/>
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 2 */}
        <Link to="/product/2">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun2.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 3 */}
        <Link to="/product/3">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun3.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 4 */}
        <Link to="/product/4">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun4.jpg" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 5 */}
        <Link to="/product/5">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun5.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 6 */}
        <Link to="/product/6">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun6.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 7 */}
        <Link to="/product/7">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun7.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 8 */}
        <Link to="/product/8">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun8.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 9 */}
        <Link to="/product/9">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun9.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 10 */}
        <Link to="/product/10">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun10.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 11 */}
        <Link to="/product/11">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun11.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product 12 */}
        <Link to="/product/12">
          <div className="group">
            <div className="mb-4 relative overflow-hidden flex justify-center items-center">
              <img src="/urun12.png" alt="Product" className="w-[239px] h-[300px] object-cover transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <div className="text-center">
              <h4 className="text-base font-bold text-[#252B42] mb-2">Graphic Design</h4>
              <p className="text-sm text-[#737373] mb-2">English Department</p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-[#BDBDBD] line-through">$16.48</span>
                <span className="text-[#23856D] font-bold">$6.48</span>
              </div>
              <div className="flex justify-center mt-2 space-x-1">
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-12">
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <button className="px-6 py-4 text-[#BDBDBD] bg-white hover:bg-gray-100">First</button>
          <button className="px-6 py-4 text-[#737373] hover:bg-gray-100 cursor-pointer">1</button>
          <button className="px-6 py-4 text-white bg-[#23A6F0] cursor-pointer">2</button>
          <button className="px-6 py-4 text-[#737373] hover:bg-gray-100 cursor-pointer">3</button>
          <button className="px-6 py-4 text-[#737373] hover:bg-gray-100 cursor-pointer">Next</button>
        </div>
      </div>
      
      {/* Brand Logos Section */}
      <div className="py-10">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <img src="/hooli.png" alt="Hooli" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/lyft.png" alt="Lyft" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/leaf.png" alt="Leaf" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/stripe.png" alt="Stripe" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/amazon.png" alt="Amazon" className="h-8 md:h-10 object-contain cursor-pointer" />
          <img src="/reddit.png" alt="Reddit" className="h-8 md:h-10 object-contain cursor-pointer" />
        </div>
      </div>




    </div>
  );
};

export default ShopContent;