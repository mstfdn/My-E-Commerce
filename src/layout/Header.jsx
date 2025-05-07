import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, Menu, X, ChevronDown, User, Settings, UserCircle, LogOut, Trash, Plus, Minus } from 'lucide-react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';
import { fetchCategories } from '../store/actions/productActions';
import { removeFromCart, updateCartQuantity } from '../store/actions/cartActions';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  
  // Redux store'dan kullanıcı, kategori ve sepet bilgilerini çekme
  const userFromRedux = useSelector(state => state.client?.user);
  const categories = useSelector(state => state.product?.categories || []);
  const cartItems = useSelector(state => state.cart?.items || []);
  const cartTotalItems = useSelector(state => state.cart?.totalItems || 0);
  const cartTotalAmount = useSelector(state => state.cart?.totalAmount || 0);
  
  const [userFromStorage, setUserFromStorage] = useState(null);
  
  // Kategorileri gruplandırma fonksiyonu
  const getCategoriesByGender = () => {
    const kadinCategories = categories.filter(cat => cat.gender === 'k');
    const erkekCategories = categories.filter(cat => cat.gender === 'e');
    
    return { kadinCategories, erkekCategories };
  };
  
  // Kategorileri rating'e göre sıralama ve ilk 5'ini alma
  const getTopCategories = () => {
    return [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);
  };
  
  // Kategorileri çekme
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  // Kullanıcı bilgisini localStorage veya sessionStorage'dan çekme
  useEffect(() => {
    try {
      const localUserStr = localStorage.getItem('user');
      const localUser = localUserStr && localUserStr !== 'undefined' ? JSON.parse(localUserStr) : null;
      
      const sessionUserStr = sessionStorage.getItem('user');
      const sessionUser = sessionUserStr && sessionUserStr !== 'undefined' ? JSON.parse(sessionUserStr) : null;
      
      setUserFromStorage(localUser || sessionUser);
    } catch (error) {
      console.error('Kullanıcı bilgisi çekilirken hata oluştu:', error);
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
    }
  }, []);

  const user = userFromRedux?.name ? userFromRedux : userFromStorage;
  const testUser = { name: "Mustafa Fidan" };
  const activeUser = user || testUser;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/login');
  };

  // Sepetten ürün silme
  const handleRemoveFromCart = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromCart(productId));
  };

  // Sepet ürün miktarını güncelleme
  const handleUpdateQuantity = (e, productId, newQuantity) => {
    e.preventDefault();
    e.stopPropagation();
    if (newQuantity < 1) return;
    dispatch(updateCartQuantity(productId, newQuantity));
  };

  // Sepeti onayla butonu
  const handleCheckout = () => {
    history.push('/checkout');
  };

  // Kategorileri gruplandır
  const { kadinCategories, erkekCategories } = getCategoriesByGender();
  const topCategories = getTopCategories();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="hidden sm:block bg-[#252B42] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="tel:(225) 555-0118" className="flex items-center gap-1 text-sm">
                <Phone size={16} />
                <span>(225) 555-0118</span>
              </a>
              <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-1 text-sm">
                <Mail size={16} />
                <span>michelle.rivera@example.com</span>
              </a>
            </div>
            
            {/* Slogan */}
            <div className="hidden md:block text-sm">
              <p>Follow Us and get a chance to win 80% off</p>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm hidden md:inline">Follow Us :</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-[#23A6F0]"><Instagram size={16} /></a>
                <a href="#" className="hover:text-[#23A6F0]"><Youtube size={16} /></a>
                <a href="#" className="hover:text-[#23A6F0]"><Facebook size={16} /></a>
                <a href="#" className="hover:text-[#23A6F0]"><Twitter size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className={`text-sm font-medium ${location.pathname === '/' ? 'text-[#23A6F0]' : 'text-[#737373] hover:text-[#23A6F0]'}`}>Home</Link>
              
              {/* Shop Dropdown */}
              <Popover className="relative">
                {({ open, close }) => (
                  <>
                    <Popover.Button className={`flex items-center text-sm font-medium ${
                      location.pathname.includes('/shop') ? 'text-[#23A6F0]' : 'text-[#737373] hover:text-[#23A6F0]'
                    } focus:outline-none`}>
                      <span className='cursor-pointer'>Shop</span>
                      <ChevronDown size={16} className={`ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-96 mt-3 left-0 bg-white rounded-md shadow-md ring-1 ring-gray-300 ring-opacity-5">
                        <div className="p-4 grid grid-cols-2 gap-4">
                          {/* Kadın Kategorileri */}
                          <div>
                            <h3 className="text-lg font-bold mb-2 text-[#252B42]">Kadın</h3>
                            <ul className="space-y-2">
                              {kadinCategories.map(category => (
                                <li key={category.id}>
                                  <Link 
                                    to={`/shop/kadin/${category.title.toLowerCase()}/${category.id}`}
                                    className="text-[#737373] hover:text-[#23A6F0]"
                                    onClick={() => close()} // Menüyü kapat
                                  >
                                    {category.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Erkek Kategorileri */}
                          <div>
                            <h3 className="text-lg font-bold mb-2 text-[#252B42]">Erkek</h3>
                            <ul className="space-y-2">
                              {erkekCategories.map(category => (
                                <li key={category.id}>
                                  <Link 
                                    to={`/shop/erkek/${category.title.toLowerCase()}/${category.id}`}
                                    className="text-[#737373] hover:text-[#23A6F0]"
                                    onClick={() => close()} // Menüyü kapat
                                  >
                                    {category.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              <Link to="/about" className={`text-sm font-medium ${location.pathname === '/about' ? 'text-[#23A6F0]' : 'text-[#737373] hover:text-[#23A6F0]'}`}>About</Link>
              <Link to="/blog" className={`text-sm font-medium ${location.pathname === '/blog' ? 'text-[#23A6F0]' : 'text-[#737373] hover:text-[#23A6F0]'}`}>Blog</Link>
              <Link to="/contact" className={`text-sm font-medium ${location.pathname === '/contact' ? 'text-[#23A6F0]' : 'text-[#737373] hover:text-[#23A6F0]'}`}>Contact</Link>
              
              {/* More Dropdown */}
              <Popover className="relative">
                {({ open, close }) => (
                  <>
                    <Popover.Button className={`flex items-center text-sm font-medium ${
                      location.pathname === '/team' || location.pathname === '/pricing' 
                        ? 'text-[#23A6F0]' 
                        : 'text-[#737373] hover:text-[#23A6F0]'
                    } focus:outline-none`}>
                      <span>More</span>
                      <ChevronDown size={16} className={`ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-40 mt-3 left-0 bg-white rounded-md shadow-md ring-1 ring-gray-300 ring-opacity-5">
                        <div className="py-1">
                          <Link 
                            to="/team" 
                            className={`block px-4 py-2 text-sm ${location.pathname === '/team' ? 'text-[#23A6F0]' : 'text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => close()}
                          >
                            Team
                          </Link>
                          <Link 
                            to="/pricing" 
                            className={`block px-4 py-2 text-sm ${location.pathname === '/pricing' ? 'text-[#23A6F0]' : 'text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => close()}
                          >
                            Pricing
                          </Link>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </nav>
            
            {/* User Actions */}
            <div className="flex items-center space-x-5">
              {/* Kullanıcı bilgisi veya Login/Register linki */}
              {activeUser ? (
                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button className="cursor-pointer flex items-center text-[#23A6F0] focus:outline-none">
                        <User size={16} className="mr-1" />
                        <span className="text-sm font-medium hidden sm:inline">{activeUser.name}</span>
                        <span className="text-sm font-medium sm:hidden">Hesap</span>
                        <ChevronDown size={16} className="ml-1" />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-50 w-56 mt-3 right-0 bg-white rounded-md shadow-lg ring-1 ring-gray-400 ring-opacity-5 ">
                          <div className="p-4">
                            <div className="font-medium text-gray-800 mb-2">{activeUser.name}</div>
                            <div className="border-b border-gray-200 opacity-50 my-2"></div>
                            <div className="py-1">
                              <Link to="/orders" className="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => close()}>
                                <ShoppingCart size={16} className="mr-2" />
                                Siparişlerim
                              </Link>
                              <Link to="/profile" className="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => close()}>
                                <UserCircle size={16} className="mr-2" />
                                Profile
                              </Link>
                              <Link to="/settings" className="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md" onClick={() => close()}>
                                <Settings size={16} className="mr-2" />
                                Settings
                              </Link>
                              <button 
                                onClick={() => {
                                  handleLogout();
                                  close();
                                }}
                                className="cursor-pointer flex items-center w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md"
                              >
                                <LogOut size={16} className="mr-2 " />
                                Logout
                              </button>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ) : (
                <Link to="/login" className="flex items-center text-[#23A6F0]">
                  <User size={16} className="mr-1" />
                  <span className="text-sm font-medium">Login / Register</span>
                </Link>
              )}
              
              <Link to="/search" className="text-[#23A6F0]">
                <Search size={16} />
              </Link>
              
              {/* Sepet Popover */}
              <Popover className="relative">
                {({ open, close }) => (
                  <>
                    <Popover.Button className="text-[#23A6F0] relative focus:outline-none">
                      <ShoppingCart size={16} />
                      {cartTotalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          {cartTotalItems}
                        </span>
                      )}
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-50 w-72 mt-3 right-0 bg-white rounded-md shadow-lg ring-1 ring-gray-400 ring-opacity-5">
                        <div className="p-4">
                          <div className="font-medium text-gray-800 mb-2 flex justify-between items-center">
                            <span>Sepetim ({cartTotalItems})</span>
                            <Link to="/cart" className="text-sm text-[#23A6F0] hover:underline" onClick={() => close()}>
                              Sepete Git
                            </Link>
                          </div>
                          
                          <div className="border-b border-gray-200 opacity-50 my-2"></div>
                          
                          {/* Sepet Öğeleri */}
                          <div className="max-h-64 overflow-y-auto py-2">
                            {cartItems.length === 0 ? (
                              <div className="text-center py-4 text-gray-500">
                                Sepetiniz boş
                              </div>
                            ) : (
                              cartItems.map(item => (
                                <div key={item.id} className="flex items-center py-2 border-b border-gray-100 last:border-b-0">
                                  <Link to={`/product/${item.id}`} className="flex-shrink-0" onClick={() => close()}>
                                    <img 
                                      src={item.imageUrl} 
                                      alt={item.name} 
                                      className="w-12 h-16 object-cover rounded"
                                    />
                                  </Link>
                                  <div className="ml-3 flex-grow">
                                    <Link 
                                      to={`/product/${item.id}`} 
                                      className="text-sm font-medium text-gray-800 line-clamp-1 hover:text-[#23A6F0]"
                                      onClick={() => close()}
                                    >
                                      {item.name}
                                    </Link>
                                    <div className="flex items-center justify-between mt-1">
                                      <div className="flex items-center">
                                        <button
                                          onClick={(e) => handleUpdateQuantity(e, item.id, item.quantity - 1)}
                                          className="p-1 text-gray-500 hover:text-[#23A6F0]"
                                        >
                                          <Minus size={12} />
                                        </button>
                                        <span className="px-2 text-sm">{item.quantity}</span>
                                        <button
                                          onClick={(e) => handleUpdateQuantity(e, item.id, item.quantity + 1)}
                                          className="p-1 text-gray-500 hover:text-[#23A6F0]"
                                        >
                                          <Plus size={12} />
                                        </button>
                                      </div>
                                      <span className="text-sm font-medium text-[#23856D]">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                  </div>
                                  <button
                                    onClick={(e) => handleRemoveFromCart(e, item.id)}
                                    className="ml-2 text-gray-400 hover:text-red-500"
                                  >
                                    <Trash size={14} />
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
                          
                          {/* Toplam Tutar */}
                          {cartItems.length > 0 && (
                            <>
                              <div className="border-t border-gray-200 mt-2 pt-2">
                                <div className="flex justify-between items-center font-medium">
                                  <span className="text-gray-700">Toplam:</span>
                                  <span className="text-[#23856D]">${cartTotalAmount.toFixed(2)}</span>
                                </div>
                              </div>
                              
                              {/* Sepeti Onayla Butonu */}
                              <button
                                onClick={() => {
                                  handleCheckout();
                                  close();
                                }}
                                className="w-full mt-3 py-2 bg-[#23A6F0] text-white rounded flex items-center justify-center hover:bg-[#1A8CD8] transition-colors"
                              >
                                Sepeti Onayla
                              </button>
                            </>
                          )}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              <Link to="/wishlist" className="text-[#23A6F0] relative">
                <Heart size={16} />
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#737373]" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              
              
              <Link 
                to="/" 
                className={`text-sm font-medium ${location.pathname === '/' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}
                onClick={handleMenuLinkClick}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`text-sm font-medium ${location.pathname === '/shop' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}
                onClick={handleMenuLinkClick}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium ${location.pathname === '/about' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}
                onClick={handleMenuLinkClick}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm font-medium ${location.pathname === '/blog' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}
                onClick={handleMenuLinkClick}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium ${location.pathname === '/contact' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}
                onClick={handleMenuLinkClick}
              >
                Contact
              </Link>
              
              {/* More menüsü için mobil görünüm - Popover olarak */}
              <div className="relative">
                <button 
                  onClick={toggleMoreMenu}
                  className={`flex items-center text-sm font-medium ${
                    location.pathname === '/team' || location.pathname === '/pricing' 
                      ? 'text-[#23A6F0]' 
                      : 'text-[#737373]'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown size={16} className={`ml-1 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMoreOpen && (
                  <div className="mt-2 pl-4 space-y-2 bg-gray-50 py-2 rounded-md">
                    <Link 
                      to="/team" 
                      className={`block text-sm font-medium ${location.pathname === '/team' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}
                      onClick={handleMenuLinkClick}
                    >
                      Team
                    </Link>
                    <Link 
                      to="/pricing" 
                      className={`block text-sm font-medium ${location.pathname === '/pricing' ? 'text-[#23A6F0]' : 'text-[#737373]'}`}
                      onClick={handleMenuLinkClick}
                    >
                      Pricing
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobil Sepet Özeti */}
              {cartItems.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Sepetim ({cartTotalItems})</span>
                    <Link 
                      to="/cart" 
                      className="text-sm text-[#23A6F0]"
                      onClick={handleMenuLinkClick}
                    >
                      Sepete Git
                    </Link>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Toplam: <span className="font-medium text-[#23856D]">${cartTotalAmount.toFixed(2)}</span>
                  </div>
                  
                  <Link 
                    to="/checkout" 
                    className="mt-2 block w-full py-2 bg-[#23A6F0] text-white text-center rounded"
                    onClick={handleMenuLinkClick}
                  >
                    Sepeti Onayla
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;