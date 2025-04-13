import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';


const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [activeTab, setActiveTab] = useState('description');
  const [currentImage, setCurrentImage] = useState(0); // Ana görsel için state ekledim
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ürün verilerini axios ile çekme
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // src/data klasöründen ürün verilerini import etme
        const response = await import('../data/products.json');
        const products = response.default;
        
        // productId'ye göre ürün verisi seçme
        const id = parseInt(productId) || 1;
        const selectedProduct = products[id] || products[1]; // Eğer id bulunamazsa varsayılan olarak ilk ürünü göster
        
        setProduct(selectedProduct);
        setCurrentImage(0); // Ürün değiştiğinde görsel indeksini sıfırla
        setLoading(false);
      } catch (err) {
        console.error("Ürün verileri yüklenirken hata oluştu:", err);
        setError("Ürün verileri yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Ürün yükleniyor...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Ürün bulunamadı.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <a href="/" className="text-gray-600 font-bold hover:text-blue-500 cursor-pointer">Home</a>
        <span className="mx-2">›</span>
        <a href="/shop" className="text-gray-600 hover:text-blue-500 cursor-pointer">Shop</a>
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-center">
        {/* Product Images */}
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="mb-5 relative w-full">
            <img 
              src={currentImage === 0 ? product.imageUrl : `/urun${currentImage}.png`}
              alt={product.name} 
              className="rounded-md w-full object-contain mx-auto cursor-pointer"
            />
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 cursor-pointer"
              onClick={() => setCurrentImage(prev => (prev > 0 ? prev - 1 : 2))} // Önceki görsel
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 cursor-pointer"
              onClick={() => setCurrentImage(prev => (prev < 2 ? prev + 1 : 0))} // Sonraki görsel
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="flex gap-4 justify-center">
            <img 
              src={product.imageUrl} 
              alt="Thumbnail 1" 
              className={`w-20 h-20 object-cover border ${currentImage === 0 ? 'border-blue-500' : 'border-gray-300'} rounded-md cursor-pointer`}
              onClick={() => setCurrentImage(0)} 
            />
            
            <img 
              src="/urun2.png" 
              alt="Thumbnail 3" 
              className={`w-20 h-20 object-cover border ${currentImage === 2 ? 'border-blue-500' : 'border-gray-300'} rounded-md cursor-pointer`}
              onClick={() => setCurrentImage(2)} 
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className={`w-5 h-5 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 cursor-pointer">{product.reviews} Reviews</span>
          </div>
          
          {/* Price */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          </div>
          
          {/* Availability */}
          <div className="mb-5">
            <p className="text-sm">
              <span className="text-gray-600">Availability : </span>
              <span className="text-green-600 font-medium cursor-pointer">{product.availability}</span>
            </p>
          </div>
          
          {/* Description */}
          <div className="mb-6 border-t border-b py-5">
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          {/* Color Options */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Colors:</p>
            <div className="flex gap-3">
              {product.colors.map(color => (
                <button 
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                  style={{ 
                    backgroundColor: 
                      color === 'blue' ? '#23A6F0' : 
                      color === 'green' ? '#2DC071' : 
                      color === 'orange' ? '#E77C40' : 
                      color === 'navy' ? '#252B42' : color 
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-auto">
            <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md hover:bg-blue-600 transition font-medium cursor-pointer">
              Select Options
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
              <Heart size={22} />
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
              <ShoppingCart size={22} />
            </button>
            <button className="border border-gray-300 p-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
              <Eye size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16 mb-10">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 font-medium text-sm cursor-pointer ${
                activeTab === 'description'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`py-4 px-1 font-medium text-sm cursor-pointer ${
                activeTab === 'additional'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 font-medium text-sm cursor-pointer ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Reviews ({product.reviews})
            </button>
          </div>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <img 
                  src="/urun1.png" 
                  alt="Product Description" 
                  className="rounded-md w-[316px] h-[410px] object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold mb-4">the quick fox jumps over</h2>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                
                <h2 className="text-xl font-bold mb-4">the quick fox jumps over</h2>
                <div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">›</span>
                      <p className="text-gray-600">the quick fox jumps over the lazy dog</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">›</span>
                      <p className="text-gray-600">the quick fox jumps over the lazy dog</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">›</span>
                      <p className="text-gray-600">the quick fox jumps over the lazy dog</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">›</span>
                      <p className="text-gray-600">the quick fox jumps over the lazy dog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'additional' && (
            <div className="flex flex-col md:flex-row gap-8">
              
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold mb-4">the quick fox jumps over</h2>
                <div className="mb-6">
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Ürün Özellikleri</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li className="mb-1">Malzeme: %100 Pamuk</li>
                      <li className="mb-1">Renk: {product.colors.join(', ')}</li>
                      <li className="mb-1">Kategori: {product.category}</li>
                      <li className="mb-1">Stok Durumu: {product.stock} adet</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Ölçüler</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li className="mb-1">S - M - L - XL</li>
                      <li className="mb-1">Ürün ölçüleri için size rehberine bakınız</li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-4">the quick fox jumps over</h2>
                <div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">›</span>
                      <p className="text-gray-600">the quick fox jumps over the lazy dog</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">›</span>
                      <p className="text-gray-600">the quick fox jumps over the lazy dog</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">›</span>
                      <p className="text-gray-600">the quick fox jumps over the lazy dog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold mb-4">the quick fox jumps over</h2>
                <div className="mb-6">
                  <div className="space-y-4">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="border-b pb-4">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg 
                                key={star} 
                                className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-medium">Müşteri {index + 1}</span>
                          <span className="text-xs text-gray-500 ml-auto">12 Mayıs 2023</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Bestseller Products Section */}
      <div className="mt-20 mb-16">
        <h2 className="text-2xl font-bold text-center mb-12">BESTSELLER PRODUCTS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Bestseller Product 1 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro7.png" 
                alt="Bestseller Product 1" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>

          {/* Bestseller Product 2 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro2.png" 
                alt="Bestseller Product 2" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>

          {/* Bestseller Product 3 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro3.png" 
                alt="Bestseller Product 3" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>

          {/* Bestseller Product 4 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro4.png" 
                alt="Bestseller Product 4" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>

          {/* Bestseller Product 5 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro5.png" 
                alt="Bestseller Product 5" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>

          {/* Bestseller Product 6 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro6.png" 
                alt="Bestseller Product 6" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>

          {/* Bestseller Product 7 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro7.png" 
                alt="Bestseller Product 7" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>

          {/* Bestseller Product 8 */}
          <div className="group">
            <div className="mb-3 overflow-hidden rounded-md">
              <img 
                src="/pro8.png" 
                alt="Bestseller Product 8" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">Graphic Design</h3>
              <p className="text-gray-500 text-sm mb-2">English Department</p>
              <div className="flex justify-center items-center">
                <span className="text-gray-400 line-through mr-2">$16.48</span>
                <span className="text-blue-500 font-semibold">$6.48</span>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default ProductDetail;