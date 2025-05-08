import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Eye, ArrowLeft } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { fetchProductDetail } from '../store/actions/productActions';
import { Link, useHistory } from 'react-router-dom';

const ProductDetail = ({ productId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedColor, setSelectedColor] = useState('blue');
  const [activeTab, setActiveTab] = useState('description');
  const [currentImage, setCurrentImage] = useState(0);
  
  // Redux store'dan ürün detaylarını al
  const product = useSelector(state => state.product.productDetail);
  const loading = useSelector(state => state.product.productDetailLoading);
  const error = useSelector(state => state.product.productDetailError);

  // Ürün verilerini çek
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
  }, [dispatch, productId]);

  // Sepete ekle fonksiyonu
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.images && product.images.length > 0 ? product.images[0].url : `/urun${(product.id % 6) + 1}.png`,
        quantity: 1
      }));
    }
  };

  // Geri dönme fonksiyonu
  const handleGoBack = () => {
    history.goBack();
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-red-500">
        <p>Ürün yüklenirken bir hata oluştu: {error}</p>
        <button 
          onClick={handleGoBack}
          className="mt-4 flex items-center text-blue-500 hover:text-blue-700"
        >
          <ArrowLeft size={20} className="mr-2" />
          Geri Dön
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Ürün bulunamadı.</p>
        <button 
          onClick={handleGoBack}
          className="mt-4 flex items-center text-blue-500 hover:text-blue-700"
        >
          <ArrowLeft size={20} className="mr-2" />
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Geri Dön Butonu */}
      <button 
        onClick={handleGoBack}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
      >
        <ArrowLeft size={20} className="mr-2" />
        Geri Dön
      </button>

      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-600 font-bold hover:text-blue-500">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <Link to="/shop" className="text-gray-600 hover:text-blue-500">Mağaza</Link>
        <span className="mx-2">›</span>
        <span className="text-blue-500">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-center">
        {/* Ürün Görselleri */}
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="mb-5 relative w-full">
            <img 
              src={product.images && product.images.length > 0 ? product.images[currentImage].url : `/urun${(product.id % 6) + 1}.png`}
              alt={product.name} 
              className="rounded-md w-full h-[400px] object-contain mx-auto"
            />
            {product.images && product.images.length > 1 && (
              <>
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                  onClick={() => setCurrentImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1))}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                  onClick={() => setCurrentImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0))}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}
          </div>
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4 justify-center">
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image.url} 
                  alt={`${product.name} - Görsel ${index + 1}`} 
                  className={`w-20 h-20 object-cover border ${currentImage === index ? 'border-blue-500' : 'border-gray-300'} rounded-md cursor-pointer`}
                  onClick={() => setCurrentImage(index)} 
                />
              ))}
            </div>
          )}
        </div>

        {/* Ürün Detayları */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          
          {/* Değerlendirme */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className={`w-5 h-5 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{product.rating} Değerlendirme</span>
          </div>
          
          {/* Fiyat */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          </div>
          
          {/* Stok Durumu */}
          <div className="mb-5">
            <p className="text-sm">
              <span className="text-gray-600">Stok Durumu: </span>
              <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `Stokta (${product.stock})` : 'Stokta Yok'}
              </span>
            </p>
          </div>
          
          {/* Açıklama */}
          <div className="mb-6 border-t border-b py-5">
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          {/* Aksiyon Butonları */}
          <div className="flex flex-wrap gap-3 mt-auto">
            <button 
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className={`px-8 py-3 rounded-md font-medium ${
                product.stock > 0 
                  ? 'bg-[#23A6F0] text-white hover:bg-blue-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition`}
            >
              Sepete Ekle
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-100 transition">
              <Heart size={22} />
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-100 transition">
              <ShoppingCart size={22} />
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-100 transition">
              <Eye size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Ürün Detay Sekmeleri */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Ürün Açıklaması
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'additional'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Ek Bilgiler
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Değerlendirmeler ({Math.floor(product.rating * 10)})
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}
          
          {activeTab === 'additional' && (
            <div>
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ürün ID</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kategori ID</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category_id}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mağaza ID</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.store_id}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Satış Sayısı</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sell_count}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <p className="text-gray-600">Bu ürün için henüz değerlendirme bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;