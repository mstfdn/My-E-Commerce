import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Heart, Eye, BarChart2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions'; // Import cart action

const ShopContent = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector(state => state.product?.categories || []);
  const products = useSelector(state => state.product?.products || []); 
  const fetchState = useSelector(state => state.product?.fetchState);
  const loading = useSelector(state => state.product?.loading);
  const error = useSelector(state => state.product?.error);
  
  const [sortOption, setSortOption] = useState('');
  const [filterText, setFilterText] = useState('');
  const [tempFilterText, setTempFilterText] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  
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
    let url = 'products?';
    
    // Kategori parametresi
    if (categoryId) {
      url += `category=${categoryId}`;
    }
    
    // Filtre parametresi
    if (filterText) {
      url += `${categoryId ? '&' : ''}filter=${filterText}`;
    }
    
    // Sıralama parametresi
    if (sortOption) {
      url += `${(categoryId || filterText) ? '&' : ''}sort=${sortOption}`;
    }
    
    dispatch(fetchProducts(url));
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
  const displayProducts = (sortedProducts.length > 0 ? sortedProducts : products).slice(0, 12);

  // Sepete ekle işlemi - GÜNCELLENDI
  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Link'in yönlendirmesini engelle
    e.stopPropagation(); // Event yayılımını engelle
    
    // Redux action'ı ile sepete ekleme
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl || `/urun${(product.id % 6) + 1}.png`,
      quantity: 1
    }));
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
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - GÜNCELLENDI */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 relative transition-opacity duration-300 ${fadeOut ? 'opacity-0' : fadeIn ? 'opacity-100' : ''}`}>
        {displayProducts.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            <p className="text-xl">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            <button 
              onClick={() => {
                setTempFilterText('');
                setFilterText('');
                setSortOption('');
              }}
              className="mt-4 text-[#23A6F0] hover:underline"
            >
              Tüm ürünleri göster
            </button>
          </div>
        ) : (
          displayProducts.map((product, index) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden bg-white relative"
            >
              <div className="p-4">
                <div className="mb-4 relative overflow-hidden flex justify-center items-center rounded-md">
                  <img 
                    src={product.imageUrl || `/urun${(index % 6) + 1}.png`}
                    alt={product.name} 
                    className="w-[239px] h-[300px] object-cover cursor-pointer transition-transform hover:scale-105"
                  />
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      %{product.discount} İndirim
                    </span>
                  )}
                  
                  {/* Hızlı Erişim Butonları */}
                  <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Favorilere eklendi:', product.id);
                      }}
                      className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
                    >
                      <Heart size={18} className="text-gray-700" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Hızlı bakış:', product.id);
                      }}
                      className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
                    >
                      <Eye size={18} className="text-gray-700" />
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-base font-bold text-[#252B42] mb-2 line-clamp-1">{product.name}</h4>
                  <p className="text-sm text-[#737373] mb-2">{product.category}</p>
                  
                  {/* Product Features */}
                  <div className="flex justify-center gap-2 mb-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BarChart2 size={14} />
                      <span>{product.rating || 4.5}</span>
                    </span>
                    <span>|</span>
                    <span>Stok: {product.stock || 10}</span>
                  </div>
                  
                  <div className="flex justify-center items-center gap-2">
                    {product.oldPrice && (
                      <span className="text-[#BDBDBD] line-through">${product.oldPrice}</span>
                    )}
                    <span className="text-[#23856D] font-bold">${product.price}</span>
                  </div>
                  
                  <div className="flex justify-center mt-2 space-x-1 mb-3">
                    <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#23A6F0]"></span>
                    <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#2DC071]"></span>
                    <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#E77C40]"></span>
                    <span className="cursor-pointer w-4 transition-transform hover:scale-105 h-4 rounded-full bg-[#252B42]"></span>
                  </div>
                  
                  {/* Sepete Ekle Butonu - GÜNCELLENDI */}
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="cursor-pointer w-full py-2 bg-[#23A6F0] text-white rounded flex items-center justify-center gap-2 hover:bg-[#1A8CD8] transition-colors mt-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Sepete Ekle</span>
                  </button>
                </div>
              </div>
            </Link>
          ))
        )}
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