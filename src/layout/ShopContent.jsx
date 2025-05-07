import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchProducts } from '../store/actions/productActions';

const ShopContent = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector(state => state.product?.categories || []);
  const fetchState = useSelector(state => state.product?.fetchState);
  const loading = useSelector(state => state.product?.loading);
  const error = useSelector(state => state.product?.error);
  
  // Kategorileri cinsiyete göre ayırma
  const womenCategories = categories.filter(cat => cat.gender === 'k');
  const menCategories = categories.filter(cat => cat.gender === 'e');
  
  // Top kategorileri seçme
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  
  useEffect(() => {
    if (fetchState === 'NOT_FETCHED') {
      dispatch(fetchCategories());
    }
  }, [dispatch, fetchState]);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#23A6F0]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        Ürünler yüklenirken bir hata oluştu: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Shop Header */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#252B42]">
            {gender && categoryName ? `${gender === 'kadin' ? 'Kadın' : 'Erkek'} - ${categoryName}` : 'Shop'}
          </h1>
          <div className="flex items-center text-[#737373]">
            <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/shop" className="hover:text-[#23A6F0]">Shop</Link>
            {gender && (
              <>
                <ChevronRight size={16} className="mx-2" />
                <Link to={`/shop/${gender}`} className="hover:text-[#23A6F0]">
                  {gender === 'kadin' ? 'Kadın' : 'Erkek'}
                </Link>
              </>
            )}
            {categoryName && (
              <>
                <ChevronRight size={16} className="mx-2" />
                <span className="text-[#23A6F0]">{categoryName}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Top Categories Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#252B42] mb-6"></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {topCategories.map(category => (
            <Link 
              key={category.id}
              to={`/shop/${category.gender === 'k' ? 'kadin' : 'erkek'}/${category.title.toLowerCase()}/${category.id}`}
              className="relative group overflow-hidden rounded"
            >
              <img 
                src={category.img || "/card1.png"} 
                alt={category.title} 
                className="w-[260px] h-[260px] object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-bold">{category.title}</h3>
              </div>
            </Link>
          ))}
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