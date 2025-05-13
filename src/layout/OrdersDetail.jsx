import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronRight, Trash2, Plus, Minus, Check, ChevronDown } from 'lucide-react';

const OrdersDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  // Adım durumu için state 
  const [currentStep, setCurrentStep] = useState(0); // 0: Sepet, 1: Adres, 2: Ödeme 
  
  // Sipariş tamamlandı durumu için state
  const [orderCompleted, setOrderCompleted] = useState(false);
  
  // Adres bilgileri için state 
  const [addressInfo, setAddressInfo] = useState({ 
    fullName: '', 
    address: '', 
    city: '', 
    district: '', 
    zipCode: '', 
    phone: '' 
  }); 
  
  // Ödeme bilgileri için state 
  const [paymentInfo, setPaymentInfo] = useState({ 
    cardNumber: '', 
    cardHolder: '', 
    expiryDate: '', 
    cvv: '' 
  });
  
  // Sepet öğelerini state olarak tut (seçim, miktar değişiklikleri için)
  const [items, setItems] = useState([]);
  
  // Kupon kodu state'i
  const [couponCode, setCouponCode] = useState('');
  const [showCouponInput, setShowCouponInput] = useState(false);
  
  // Redux store'dan sepet bilgilerini al
  const cartItems = useSelector(state => state.cart?.items || []);
  const cartTotalAmount = useSelector(state => state.cart?.totalAmount || 0);
  
  // Kargo ücreti (sabit değer olarak belirledim)
  const shippingCost = 29.99;
  
  // Kargo ücreti indirimi (örnek olarak)
  const shippingDiscount = -29.99;
  
  // Toplam tutar (ürünler + kargo - indirim)
  const totalAmount = cartTotalAmount + shippingCost + shippingDiscount;
  
  // Sepet boşsa ana sayfaya yönlendir 
  // React.useEffect(() => { 
  //   if (cartItems.length === 0) { 
  //     history.push('/'); 
  //   } 
  // }, [cartItems, history]);
  
  // Sepet öğelerini Redux'tan al ve state'e aktar
  useEffect(() => {
    // Redux'tan gelen verileri uygun formata dönüştür
    const formattedItems = cartItems.map(item => ({
      count: item.quantity || 1,
      checked: true,
      product: {
        id: item.id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        seller: item.seller || 'Satıcı Bilgisi'
      }
    }));
    
    // Örnek veri (gerçek veriler yoksa)
    if (formattedItems.length === 0) {
      setItems([
        
      ]);
    } else {
      setItems(formattedItems);
    }
  }, [cartItems]);
  
  // Toplam tutarı hesapla (sadece seçili ürünler için)
  const calculateSubtotal = () => {
    return items
      .filter(item => item.checked)
      .reduce((total, item) => total + (item.product.price * item.count), 0);
  };
  
  // Kargo ücreti indirimi (150 TL üzeri alışverişlerde)
  const getShippingDiscount = () => {
    return calculateSubtotal() >= 150 ? -shippingCost : 0;
  };
  
  // Toplam tutar
  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost + getShippingDiscount();
  };
  
  // Ürün miktarını artır
  const increaseCount = (index) => {
    const newItems = [...items];
    newItems[index].count += 1;
    setItems(newItems);
    
    // Burada Redux store'u da güncelleyebilirsiniz
    // dispatch(updateCartItemQuantity({ id: newItems[index].product.id, quantity: newItems[index].count }));
  };
  
  // Ürün miktarını azalt
  const decreaseCount = (index) => {
    const newItems = [...items];
    if (newItems[index].count > 1) {
      newItems[index].count -= 1;
      setItems(newItems);
      
      // Burada Redux store'u da güncelleyebilirsiniz
      // dispatch(updateCartItemQuantity({ id: newItems[index].product.id, quantity: newItems[index].count }));
    }
  };
  
  // Ürünü sepetten kaldır
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    
    // Burada Redux store'u da güncelleyebilirsiniz
    // dispatch(removeFromCart(items[index].product.id));
  };
  
  // Ürün seçimini değiştir
  const toggleItemSelection = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };
  
  // Tüm ürünleri seç/kaldır
  const toggleAllItems = (checked) => {
    const newItems = items.map(item => ({
      ...item,
      checked
    }));
    setItems(newItems);
  };
  
  // Seçili ürün sayısı
  const selectedItemsCount = items.filter(item => item.checked).length;
  
  // Kupon kodunu uygula
  const applyCoupon = () => {
    // Burada kupon kodu doğrulama ve indirim uygulama işlemleri yapılabilir
    alert(`"${couponCode}" kuponu uygulandı!`);
    setShowCouponInput(false);
  };
  
  // Adres bilgilerini güncelle 
  const handleAddressChange = (e) => { 
    const { name, value } = e.target; 
    setAddressInfo(prev => ({ 
      ...prev, 
      [name]: value 
    })); 
  }; 
  
  // Ödeme bilgilerini güncelle 
  const handlePaymentChange = (e) => { 
    const { name, value } = e.target; 
    setPaymentInfo(prev => ({ 
      ...prev, 
      [name]: value 
    })); 
  }; 
  
  // Sonraki adıma geç 
  const handleNextStep = () => { 
    setCurrentStep(prev => prev + 1); 
  }; 
  
  // Önceki adıma dön 
  const handlePrevStep = () => { 
    setCurrentStep(prev => prev - 1); 
  }; 
  
  // Siparişi tamamla fonksiyonu 
  const handleCompleteOrder = () => { 
    // Sipariş tamamlandı durumunu true yap
    setOrderCompleted(true);
    
    // Sepeti sıfırla (Redux store'dan)
    dispatch({ type: 'CLEAR_CART' });
    
    // Yerel state'i de temizle
    setItems([]);
    
    // 5 saniye sonra ana sayfaya yönlendir
    setTimeout(() => {
      history.push('/');
    }, 5000);
  };
  
  // Adım göstergeleri 
  const renderStepIndicator = () => { 
    return ( 
      <div className="flex items-center justify-between mb-8"> 
        <div className={`flex items-center ${currentStep >= 0 ? 'text-[#23A6F0]' : 'text-gray-400'}`}> 
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 0 ? 'bg-[#23A6F0] text-white' : 'bg-gray-200 text-gray-500'}`}> 
            1 
          </div> 
          <span className="font-medium">Adres Bilgileri</span> 
        </div> 
        <div className="w-16 h-1 bg-gray-200 mx-2"> 
          <div className={`h-full ${currentStep >= 1 ? 'bg-[#23A6F0]' : 'bg-gray-200'}`} style={{ width: currentStep >= 1 ? '100%' : '0%' }}></div> 
        </div> 
        <div className={`flex items-center ${currentStep >= 1 ? 'text-[#23A6F0]' : 'text-gray-400'}`}> 
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 1 ? 'bg-[#23A6F0] text-white' : 'bg-gray-200 text-gray-500'}`}> 
            2 
          </div> 
          <span className="font-medium">Ödeme Seçenekleri</span> 
        </div> 
      </div> 
    ); 
  }; 
  
  // Adres formu 
  const renderAddressForm = () => { 
    return ( 
      <div className="bg-white rounded-lg shadow-md p-6 mb-6"> 
        <h2 className="text-xl font-bold mb-4">Adres Bilgileri</h2> 
        <div className="space-y-4"> 
          <div> 
            <label className="block text-gray-700 mb-1">Ad Soyad</label> 
            <input 
              type="text" 
              name="fullName" 
              value={addressInfo.fullName} 
              onChange={handleAddressChange} 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Ad Soyad" 
            /> 
          </div> 
          <div> 
            <label className="block text-gray-700 mb-1">Adres</label> 
            <textarea 
              name="address" 
              value={addressInfo.address} 
              onChange={handleAddressChange} 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Adres" 
              rows="3" 
            ></textarea> 
          </div> 
          <div className="grid grid-cols-2 gap-4"> 
            <div> 
              <label className="block text-gray-700 mb-1">İl</label> 
              <input 
                type="text" 
                name="city" 
                value={addressInfo.city} 
                onChange={handleAddressChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                placeholder="İl" 
              /> 
            </div> 
            <div> 
              <label className="block text-gray-700 mb-1">İlçe</label> 
              <input 
                type="text" 
                name="district" 
                value={addressInfo.district} 
                onChange={handleAddressChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                placeholder="İlçe" 
              /> 
            </div> 
          </div> 
          <div className="grid grid-cols-2 gap-4"> 
            <div> 
              <label className="block text-gray-700 mb-1">Posta Kodu</label> 
              <input 
                type="text" 
                name="zipCode" 
                value={addressInfo.zipCode} 
                onChange={handleAddressChange} 
                className="w-full p-2 border border-gray-300 rounded" 
                placeholder="Posta Kodu" 
              /> 
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Telefon</label>
              <input 
                type="text" 
                name="phone" 
                value={addressInfo.phone} 
                onChange={handleAddressChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Telefon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Ödeme formu
  const renderPaymentForm = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Ödeme Seçenekleri</h2>
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle yapabilirsiniz.</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Kart Numarası</label>
            <input 
              type="text" 
              name="cardNumber" 
              value={paymentInfo.cardNumber} 
              onChange={handlePaymentChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Kart Üzerindeki İsim</label>
            <input 
              type="text" 
              name="cardHolder" 
              value={paymentInfo.cardHolder} 
              onChange={handlePaymentChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Kart Sahibinin Adı"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Son Kullanma Tarihi</label>
              <input 
                type="text" 
                name="expiryDate" 
                value={paymentInfo.expiryDate} 
                onChange={handlePaymentChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="AA/YY"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">CVV</label>
              <input 
                type="text" 
                name="cvv" 
                value={paymentInfo.cvv} 
                onChange={handlePaymentChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <input type="checkbox" id="saveCard" className="mr-2" />
            <label htmlFor="saveCard" className="text-gray-700">Kartımı güvenli bir şekilde kaydet</label>
          </div>
        </div>
      </div>
    );
  };
  
  // Siparişi oluştur
  const createOrder = () => {
    // Seçili ürünlerle sipariş oluştur
    const selectedItems = items.filter(item => item.checked);
    if (selectedItems.length === 0) {
      alert('Lütfen en az bir ürün seçin!');
      return;
    }
    
    // Burada sipariş oluşturma işlemleri yapılabilir
    handleNextStep();
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sipariş Tamamlandı Animasyonu */}
      {orderCompleted && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold bg-white text-gray-800 mb-4">Siparişiniz Tamamlandı!</h2>
            <p className="text-gray-600 mb-6">Siparişiniz başarıyla alındı. Teşekkür ederiz!</p>
            <p className="text-gray-500 text-sm mb-4">Birkaç saniye içinde ana sayfaya yönlendirileceksiniz...</p>
            <Link 
              to="/" 
              className="inline-block bg-[#23A6F0] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      )}
      
      {/* Başlık ve Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {currentStep === 0 ? 'Sepetim' : currentStep === 1 ? 'Teslimat Adresi' : 'Ödeme'}
          {currentStep === 0 && ` (${items.length} Ürün)`}
        </h1>
        <div className="flex items-center text-sm">
          <Link to="/" className="text-gray-600 hover:text-[#23A6F0]">Ana Sayfa</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-[#23A6F0]">
            {currentStep === 0 ? 'Sepetim' : currentStep === 1 ? 'Teslimat Adresi' : 'Ödeme'}
          </span>
        </div>
      </div>
      
      {/* Adım göstergeleri (Adres ve Ödeme adımlarında göster) */}
      {currentStep > 0 && renderStepIndicator()}
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sol Taraf - Sepet Ürünleri / Adres Formu / Ödeme Formu */}
        <div className="md:w-2/3">
          {currentStep === 0 && (
            <>
              {/* Fatura Seçimi */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-gray-700">Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.</span>
              </div>
              
              {items.length > 0 ? (
                <div className="lg:w-full">
                  {items.map((item, index) => (
                    <div key={item.product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 mb-4 overflow-hidden">
                      {/* Satıcı Bilgisi */}
                      <div className="bg-gray-50 p-3 border-b border-gray-400 flex items-center justify-between">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 mr-3 cursor-pointer accent-[#23A6F0]" 
                            checked={item.checked}
                            onChange={() => toggleItemSelection(index)}
                          />
                          <span className="text-gray-700 font-medium">Satıcı: {item.product.seller}</span>
                        </div>
                        <div className="flex items-center">
                          {calculateSubtotal() >= 150 && (
                            <div className="flex items-center text-green-600 mr-4">
                              <span className="bg-green-100 p-1 rounded-full mr-2">
                                <Check size={14} className="text-green-600" />
                              </span>
                              <span className="text-sm">Kargo Bedava!</span>
                            </div>
                          )}
                          <button className="text-gray-500 hover:text-gray-700">
                            <span className="text-xs border border-gray-300 rounded px-2 py-1">Kurumsal</span>
                          </button>
                        </div>
                      </div>
                      
                      {/* Ürün Detayları */}
                      <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="flex items-center mb-4 sm:mb-0">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 mr-3 cursor-pointer accent-[#23A6F0]" 
                            checked={item.checked}
                            onChange={() => toggleItemSelection(index)}
                          />
                          <div className="w-20 h-20 mr-4 border border-gray-300 rounded p-1">
                            <img 
                              src={item.product.imageUrl || `/urun${(parseInt(item.product.id) % 6) + 1}.png`} 
                              alt={item.product.name} 
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `/urun${(parseInt(item.product.id) % 6) + 1}.png`;
                              }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex-grow mb-4 sm:mb-0">
                          <h3 className="font-medium text-gray-800 mb-1">{item.product.name}</h3>
                          
                          {/* Ürün Detay Bilgileri */}
                          <div className="text-sm text-gray-500 mb-2">
                            Tahmini Kargoya Teslim: 2-3 gün içinde
                          </div>
                        </div>
                        
                        {/* Miktar ve Fiyat */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
                          <div className="flex items-center border border-gray-400 rounded-md mb-3 sm:mb-0 sm:mr-6">
                            <button 
                              onClick={() => decreaseCount(index)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-1 border-x border-gray-400">{item.count}</span>
                            <button 
                              onClick={() => increaseCount(index)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <div className="text-right sm:text-right w-full sm:w-auto">
                            <p className="font-bold text-[#23A6F0] text-lg">
                              {(item.product.price * item.count).toFixed(2)} TL
                            </p>
                            <button 
                              onClick={() => removeItem(index)}
                              className="text-gray-400 hover:text-red-500 mt-1"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Tümünü Seç */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 mr-2 cursor-pointer accent-[#23A6F0]" 
                          checked={selectedItemsCount === items.length && items.length > 0}
                          onChange={(e) => toggleAllItems(e.target.checked)}
                        />
                        <span className="font-medium">Tümünü Seç ({selectedItemsCount}/{items.length})</span>
                      </div>
                      <button 
                        onClick={() => toggleAllItems(false)}
                        className="text-[#23A6F0] hover:underline"
                      >
                        Seçilenleri Kaldır
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h2 className="text-xl font-bold mb-4">Sepetinizde ürün bulunmamaktadır.</h2>
                  <p className="text-gray-600 mb-6">Alışverişe başlamak için aşağıdaki butona tıklayabilirsiniz.</p>
                  <Link 
                    to="/shop" 
                    className="inline-block bg-[#23A6F0] text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition"
                  >
                    Alışverişe Başla
                  </Link>
                </div>
              )}
            </>
          )}
          
          {currentStep === 1 && renderAddressForm()}
          {currentStep === 2 && renderPaymentForm()}
        </div>
        
        {/* Sağ Taraf - Sipariş Özeti */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">Sipariş Özeti</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Ürünün Toplamı</span>
                <span className="font-medium">{calculateSubtotal().toFixed(2)} TL</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Kargo Toplamı</span>
                <span className="font-medium">{shippingCost.toFixed(2)} TL</span>
              </div>
              
              {getShippingDiscount() !== 0 && (
                <div className="flex justify-between text-[#23A6F0]">
                  <span>150 TL Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                  <span>{getShippingDiscount().toFixed(2)} TL</span>
                </div>
              )}
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Toplam</span>
                <span className="text-[#23A6F0]">{calculateTotal().toFixed(2)} TL</span>
              </div>
            </div>
            
            {/* Hediye Kuponu / İndirim Kodu */}
            {currentStep === 0 && (
              <>
                {showCouponInput ? (
                  <div className="mb-6">
                    <div className="flex mb-2">
                      <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="İndirim kodu girin"
                        className="flex-grow p-2 border border-gray-300 rounded-l sm:rounded-l focus:outline-none focus:ring-1 focus:ring-[#23A6F0] mb-2 sm:mb-0"
                      />
                      <button 
                        onClick={applyCoupon}
                        className="bg-[#23A6F0] text-white px-4 py-2 rounded-r sm:rounded-r hover:bg-blue-600"
                      >
                        Uygula
                      </button>
                    </div>
                    <button 
                      onClick={() => setShowCouponInput(false)}
                      className="text-gray-500 text-sm hover:underline"
                    >
                      İptal
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center mb-6 cursor-pointer" onClick={() => setShowCouponInput(true)}>
                    <span className="text-[#23A6F0] mr-2">+</span>
                    <span className="text-[#23A6F0]">Hediye Kuponu / İndirim Kodu</span>
                  </div>
                )}
              </>
            )}
            
            {/* Butonlar */}
            {currentStep === 0 && (
              <button 
                onClick={createOrder}
                className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-medium hover:bg-blue-600 transition flex items-center justify-center"
                disabled={selectedItemsCount === 0}
              >
                <span>Sepeti Onayla</span>
                <ChevronRight size={20} />
              </button>
            )}
            
            {currentStep === 1 && (
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={handleNextStep}
                  className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-medium hover:bg-blue-600 transition"
                >
                  Ödeme Adımına Geç
                </button>
                <button 
                  onClick={handlePrevStep}
                  className="w-full bg-white text-[#23A6F0] border border-[#23A6F0] py-3 rounded-md font-medium hover:bg-gray-50 transition"
                >
                  Sepete Dön
                </button>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={handleCompleteOrder}
                  className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-medium hover:bg-blue-600 transition"
                >
                  Siparişi Tamamla
                </button>
                <button 
                  onClick={handlePrevStep}
                  className="w-full bg-white text-[#23A6F0] border border-[#23A6F0] py-3 rounded-md font-medium hover:bg-gray-50 transition"
                >
                  Adres Bilgilerine Dön
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetail;