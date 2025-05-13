import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Heart, Eye, BarChart2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchProducts, loadMoreProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';

const ShopContent = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector(state => state.product?.categories || []);
  const products = useSelector(state => state.product?.products || []); 
  const fetchState = useSelector(state => state.product?.fetchState);
  const loading = useSelector(state => state.product?.loading);
  const error = useSelector(state => state.product?.error);
  const hasMore = useSelector(state => state.product?.hasMore);
  const limit = useSelector(state => state.product?.limit);
  const offset = useSelector(state => state.product?.offset);
  
  const [sortOption, setSortOption] = useState('');
  const [filterText, setFilterText] = useState('');
  const [tempFilterText, setTempFilterText] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [addedToCart, setAddedToCart] = useState(null);
  
  // Sonsuz kaydırma için gözlemci referansı
  const observer = useRef();
  // Son ürün elementi için referans
  const lastProductElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        dispatch(loadMoreProducts());
      }
    }, { threshold: 0.5 });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, dispatch]);
  
  // Kategorileri cinsiyete göre ayırma
  const womenCategories = categories.filter(cat => cat.gender === 'k');
  const menCategories = categories.filter(cat => cat.gender === 'e');
  
  // Top kategorileri seçme
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  // Sıralama mantığını ayrı bir fonksiyona çıkaralım
  const applySort = (items, sortValue) => {
    const itemsCopy = [...items]; // Doğru kopya oluşturma
    
    switch (sortValue) {
      case 'price:asc':
        itemsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'price:desc':
        itemsCopy.sort((a, b) => b.price - a.price);
        break;
      case 'rating:asc':
        itemsCopy.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating:desc':
        itemsCopy.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    return itemsCopy;
  };

  // Filtrele butonuna tıklandığında çalışacak smooth transition fonksiyonu
  const handleFilter = () => {
    if (tempFilterText === filterText) return; // Aynı filtre ise işlem yapma
    
    // Ürünleri görünmez yap (fade out)
    setFadeOut(true);
    
    // Kısa bir süre sonra filtre işlemini gerçekleştir
    setTimeout(() => {
      setFilterText(tempFilterText);
      let filtered = [...products];
      
      if (tempFilterText) {
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(tempFilterText.toLowerCase())
        );
      }
      
      // Mevcut sıralama varsa uygula
      if (sortOption) {
        filtered = applySort(filtered, sortOption);
      }
      
      setSortedProducts(filtered);
      
      // Filtreleme işlemi bitti, şimdi gösterelim (fade in)
      setFadeOut(false);
      setFadeIn(true);
      
      // Fade in animasyonu bittikten sonra normal duruma geri dön
      setTimeout(() => {
        setFadeIn(false);
      }, 300);
    }, 300); // Fade out animasyonu süresi
  };

  // Enter tuşuna basınca da filtreleme yapalım
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFilter();
    }
  };

  // Sıralama işlemi için smooth transition fonksiyonu
  const handleSort = (value) => {
    if (value === sortOption) return; // Aynı sıralama seçili ise işlem yapma
    
    // Ürünleri görünmez yap (fade out)
    setFadeOut(true);
    
    // Kısa bir süre sonra sıralama işlemini gerçekleştir
    setTimeout(() => {
      setSortOption(value);
      const itemsToSort = sortedProducts.length > 0 ? sortedProducts : products;
      const sorted = applySort(itemsToSort, value);
      setSortedProducts(sorted);
      
      // Sıralama işlemi bitti, şimdi gösterelim (fade in)
      setFadeOut(false);
      setFadeIn(true);
      
      // Fade in animasyonu bittikten sonra normal duruma geri dön
      setTimeout(() => {
        setFadeIn(false);
      }, 300);
    }, 300); // Fade out animasyonu süresi
  };

  // Ürünleri getirme fonksiyonu
  const fetchFilteredProducts = () => {
    dispatch(fetchProducts(limit, 0, filterText));
  };
  
  // Kategoriler değiştiğinde
  useEffect(() => {
    if (fetchState === 'NOT_FETCHED') {
      dispatch(fetchCategories());
    }
  }, [dispatch, fetchState]);
  
  // URL parametreleri değiştiğinde
  useEffect(() => {
    fetchFilteredProducts();
  }, [categoryId]);

  // Update sortedProducts when products change
  useEffect(() => {
    if (products.length > 0) {
      // Apply current filter and sort
      let filtered = [...products];
      
      if (filterText) {
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(filterText.toLowerCase())
        );
      }
      
      if (sortOption) {
        filtered = applySort(filtered, sortOption);
      }
      
      setSortedProducts(filtered);
    }
  }, [products]);

  // Products to display - use sortedProducts if available, otherwise use products
  const displayProducts = sortedProducts.length > 0 ? sortedProducts : products;

  // Sepete ekle işlemi
  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Link'in yönlendirmesini engelle
    e.stopPropagation(); // Event yayılımını engelle
    
    // Eğer ürünün imageUrl'i yoksa varsayılan bir imageUrl oluştur
    const imageUrl = product.imageUrl || `/urun${(product.id % 6) + 1}.png`;
    
    // Redux action'ı ile sepete ekleme
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: imageUrl,
      quantity: 1
    }));
    
    // Sepete eklenen ürünü işaretle (küçük bir bildirim animasyonu için)
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 1500);
  };

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
          <p className="text-sm text-[#737373]">
            {displayProducts.length === 0 ? 'Ürün bulunamadı' : `Showing all ${displayProducts.length} results`}
          </p>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
          {/* Filtre Input ve Buton */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={tempFilterText}
              onChange={(e) => setTempFilterText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="px-4 py-2 border rounded w-full focus:border-[#23A6F0] outline-none transition-all"
            />
            <button
              onClick={handleFilter}
              className="bg-[#23A6F0] text-white px-4 py-2 rounded hover:bg-[#1A8CD8] transition-colors whitespace-nowrap flex-shrink-0"
            >
              Filtrele
            </button>
          </div>
          
          {/* Sıralama Select */}
          <div className="relative w-full md:w-auto">
            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="appearance-none cursor-pointer bg-[#F9F9F9] border border-[#DDDDDD] rounded px-4 py-2 pr-8 text-sm text-[#737373] focus:outline-none focus:border-[#23A6F0] w-full transition-all"
            >
              <option value="">Sıralama Seçin</option>
              <option value="price:asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price:desc">Fiyat: Yüksekten Düşüğe</option>
              <option value="rating:asc">Puan: Düşükten Yükseğe</option>
              <option value="rating:desc">Puan: Yüksekten Düşüğe</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Ürün Kartları */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${fadeOut ? 'opacity-0' : fadeIn ? 'opacity-100' : ''}`}>
        {displayProducts.map((product, index) => (
          <div 
            key={product.id} 
            ref={index === displayProducts.length - 1 ? lastProductElementRef : null}
            className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.imageUrl || `/urun${(product.id % 6) + 1}.png`}
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Mobil için ürün aksiyonları */}
                <div className="md:hidden absolute top-2 right-2 flex flex-col gap-2">
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors shadow-lg"
                  >
                    <ShoppingCart size={20} />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                    <Heart size={20} />
                  </button>
                  <Link 
                    to={`/product/${product.id}`} 
                    className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye size={20} />
                  </Link>
                </div>
                
                {/* Desktop için ürün aksiyonları */}
                <div className="hidden md:flex absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-4 justify-center space-x-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                  <Link 
                    to={`/product/${product.id}`} 
                    className="bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye size={18} />
                  </Link>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-blue-500 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Sepete Eklendi Bildirimi */}
            {addedToCart === product.id && (
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs py-1 px-2 m-2 rounded animate-bounce">
                Sepete Eklendi!
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {displayProducts.length > 0 && (
        <div className="flex justify-center mb-12">
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <button className="px-6 py-4 text-[#BDBDBD] bg-white hover:bg-gray-100">First</button>
            <button className="px-6 py-4 text-[#737373] hover:bg-gray-100 cursor-pointer">1</button>
            <button className="px-6 py-4 text-white bg-[#23A6F0] cursor-pointer">2</button>
            <button className="px-6 py-4 text-[#737373] hover:bg-gray-100 cursor-pointer">3</button>
            <button className="px-6 py-4 text-[#737373] hover:bg-gray-100 cursor-pointer">Next</button>
          </div>
        </div>
      )}
      
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