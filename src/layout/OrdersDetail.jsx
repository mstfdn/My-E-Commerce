import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronRight } from 'lucide-react';

const OrdersDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  // Adım durumu için state
  const [currentStep, setCurrentStep] = useState(0); // 0: Sepet, 1: Adres, 2: Ödeme
  
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
  React.useEffect(() => {
    if (cartItems.length === 0) {
      history.push('/');
    }
  }, [cartItems, history]);
  
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
    // Burada sipariş tamamlama işlemleri yapılabilir
    // Örneğin: API'ye sipariş gönderme, ödeme sayfasına yönlendirme vb.
    alert('Siparişiniz başarıyla tamamlandı!');
    history.push('/');
  };
  
  // Adım göstergeleri
  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        <div className={`flex items-center ${currentStep >= 0 ? 'text-orange-500' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
            1
          </div>
          <span className="font-medium">Adres Bilgileri</span>
        </div>
        <div className="w-16 h-1 bg-gray-200 mx-2">
          <div className={`h-full ${currentStep >= 1 ? 'bg-orange-500' : 'bg-gray-200'}`} style={{ width: currentStep >= 1 ? '100%' : '0%' }}></div>
        </div>
        <div className={`flex items-center ${currentStep >= 1 ? 'text-orange-500' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
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
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Başlık ve Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Siparişlerim</h1>
        <div className="flex items-center text-sm">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Ana Sayfa</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-blue-500">Siparişlerim</span>
        </div>
      </div>
      
      {/* Adım göstergeleri (Adres ve Ödeme adımlarında göster) */}
      {currentStep > 0 && renderStepIndicator()}
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sol Taraf - Sepet Ürünleri / Adres Formu / Ödeme Formu */}
        <div className="md:w-2/3">
          {currentStep === 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Sepetinizdeki Ürünler</h2>
              
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center border-b pb-4">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded mr-4"
                      />
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500">Miktar: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{(item.price * item.quantity).toFixed(2)} TL</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Sepetinizde ürün bulunmamaktadır.</p>
              )}
            </div>
          )}
          
          {currentStep === 1 && renderAddressForm()}
          {currentStep === 2 && renderPaymentForm()}
        </div>
        
        {/* Sağ Taraf - Sipariş Özeti */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">Sipariş Özeti</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Ürünün Toplamı</span>
                <span className="font-medium">{cartTotalAmount.toFixed(2)} TL</span>
              </div>
              
              <div className="flex justify-between">
                <span>Kargo Toplamı</span>
                <span className="font-medium">{shippingCost.toFixed(2)} TL</span>
              </div>
              
              <div className="flex justify-between text-red-500">
                <span>150 TL Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                <span>{shippingDiscount.toFixed(2)} TL</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Toplam</span>
                <span className="text-orange-500">{totalAmount.toFixed(2)} TL</span>
              </div>
            </div>
            
            {/* Hediye Kuponu / İndirim Kodu */}
            <div className="flex items-center mb-6">
              <span className="text-blue-500 mr-2">+</span>
              <span className="cursor-pointer text-blue-500">Hediye Kuponu / İndirim Kodu</span>
            </div>
            
            {/* Butonlar */}
            {currentStep === 0 && (
              <button 
                onClick={handleNextStep}
                className="cursor-pointer w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
              >
                Sepeti Onayla
              </button>
            )}
            
            {currentStep === 1 && (
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={handleNextStep}
                  className="cursor-pointer w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
                >
                  Devam Et
                </button>
                <button 
                  onClick={handlePrevStep}
                  className="cursor-pointer w-full bg-white text-gray-700 border border-gray-300 py-3 rounded-md font-medium hover:bg-gray-50 transition"
                >
                  Geri Dön
                </button>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={handleCompleteOrder}
                  className="cursor-pointer w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
                >
                  Kaydet ve Devam Et
                </button>
                <button 
                  onClick={handlePrevStep}
                  className="cursor-pointer w-full bg-white text-gray-700 border border-gray-300 py-3 rounded-md font-medium hover:bg-gray-50 transition"
                >
                  Geri Dön
                </button>
              </div>
            )}
            
            {/* Ek Bilgiler */}
            {currentStep > 0 && (
              <div className="mt-4 text-xs text-gray-500">
                <p className="mb-1">
                  <Link to="/sartlar" className="text-blue-500 hover:underline">Ön Bilgilendirme Koşulları</Link>'nı ve 
                  <Link to="/mesafeli-satis" className="text-blue-500 hover:underline"> Mesafeli Satış Sözleşmesi</Link>'ni 
                  okudum ve kabul ediyorum.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetail;