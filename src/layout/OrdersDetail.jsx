import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronRight, Trash2, Plus, Minus, Check, ChevronDown } from 'lucide-react';

const OrdersDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
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
  
  // Siparişi oluştur
  const createOrder = () => {
    // Seçili ürünlerle sipariş oluştur
    const selectedItems = items.filter(item => item.checked);
    if (selectedItems.length === 0) {
      alert('Lütfen en az bir ürün seçin!');
      return;
    }
    
    // Burada sipariş oluşturma işlemleri yapılabilir
    alert('Siparişiniz oluşturuluyor...');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Başlık ve Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sepetim ({items.length} Ürün)</h1>
        <div className="flex items-center text-sm">
          <Link to="/" className="text-gray-600 hover:text-[#23A6F0]">Ana Sayfa</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-[#23A6F0]">Sepetim</span>
        </div>
      </div>
      
      {/* Fatura Seçimi */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
          <Check size={16} className="text-white" />
        </div>
        <span className="text-gray-700">Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.</span>
      </div>
      
      {items.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sol Taraf - Sepet Ürünleri */}
          <div className="lg:w-2/3">
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
                    {item.product.seller === "KAOF TR AYAKKABI" && (
                      <span className="ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">9.7</span>
                    )}
                    {item.product.seller === "Mobilya Keyfi" && (
                      <span className="ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">8.8</span>
                    )}
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
                <div className="p-4 flex items-center">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 mr-3 cursor-pointer accent-[#23A6F0]" 
                      checked={item.checked}
                      onChange={() => toggleItemSelection(index)}
                    />
                    <div className="w-20 h-20 mr-4 border border-gray-300 rounded p-1">
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800 mb-1">{item.product.name}</h3>
                    
                    {/* Ürün Detay Bilgileri */}
                    <div className="text-sm text-gray-500 mb-2">
                      {item.product.id === "1001" && "Beden: 38"}
                      {item.product.id === "1002" && "Tahmini Kargoya Teslim: 9 gün içinde"}
                    </div>
                    
                    {/* Hızlı Teslimat Bilgisi */}
                    {item.product.id === "1001" && (
                      <div className="flex items-center text-green-600 text-xs mb-2">
                        <span className="mr-1">39 dakika</span>
                        <span className="text-gray-500">içinde sipariş verirsen</span>
                        <span className="font-medium mx-1">en geç yarın</span>
                        <span className="text-gray-500">kargoda!</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Miktar ve Fiyat */}
                  <div className="flex items-center">
                    <div className="flex items-center border border-gray-400 rounded-md mr-6">
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
                    
                    <div className="text-right">
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
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
          
          {/* Sağ Taraf - Sipariş Özeti */}
          <div className="lg:w-1/3">
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
              {showCouponInput ? (
                <div className="mb-6">
                  <div className="flex mb-2">
                    <input 
                      type="text" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="İndirim kodu girin"
                      className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-[#23A6F0]"
                    />
                    <button 
                      onClick={applyCoupon}
                      className="bg-[#23A6F0] text-white px-4 py-2 rounded-r hover:bg-orange-600"
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
              
              {/* Sepeti Onayla Butonu */}
              <button 
                onClick={createOrder}
                className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-medium hover:bg-orange-600 transition flex items-center justify-center"
                disabled={selectedItemsCount === 0}
              >
                <span>Sepeti Onayla</span>
                <ChevronRight size={20} />
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
    </div>
  );
};

export default OrdersDetail;
