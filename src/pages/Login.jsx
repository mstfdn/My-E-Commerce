import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import md5 from 'md5';
// Düzeltilmiş import
import { loginUser } from '../store/actions/authActions';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(''); // Gravatar URL için state
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Önceki sayfa bilgisini al (eğer varsa)
  const prevPath = location.state?.from || '/';
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  // E-posta değiştiğinde Gravatar URL'ini güncelle
  const emailValue = watch('email');
  useEffect(() => {
    if (emailValue) {
      setAvatarUrl(getGravatarUrl(emailValue));
    }
  }, [emailValue]);
  
  const onSubmit = async (data) => {
    setLoading(true);
    
    try {
      // Redux thunk action'ı ile login işlemini gerçekleştir
      const result = await dispatch(loginUser(data, history, rememberMe, prevPath));
      
      if (!result.success) {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Giriş yapılırken hata:', error);
      // Hata mesajı toast ile gösterilecek (loginUser action'ında)
    } finally {
      setLoading(false);
    }
  };
  
  // Gravatar URL'ini oluşturan yardımcı fonksiyon
  const getGravatarUrl = (email) => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Login</h2>
            
            {/* Gravatar Önizleme */}
            {emailValue && (
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                  <img 
                    src={avatarUrl} 
                    alt="Profil Resmi" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://www.gravatar.com/avatar/?d=mp&s=200"; // Varsayılan avatar
                    }}
                  />
                </div>
                <p className="text-sm text-gray-500">Gravatar Profil Resminiz</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* E-posta Alanı */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  {...register('email', { 
                    required: 'E-posta alanı zorunludur',
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      message: 'Geçerli bir e-posta adresi giriniz' 
                    } 
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              
              {/* Diğer form alanları aynı kalıyor... */}
              {/* Şifre Alanı */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  {...register('password', { 
                    required: 'Şifre alanı zorunludur'
                  })}
                />
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
              </div>
              
              {/* Beni Hatırla Seçeneği */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              {/* Şifremi Unuttum Linki */}
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600">
                  Forgot my password
                </Link>
              </div>
              
              {/* Giriş Yap Butonu */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Giriş Yapılıyor...
                    </span>
                  ) : (
                    'Giriş Yap'
                  )}
                </button>
              </div>
              
              {/* Kayıt Ol Linki */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Hesabınız yok mu?{' '}
                  <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-medium">
                    Kayıt Ol
                  </Link>
                </p>
              </div>
              
              {/* Test Kullanıcıları Bilgisi */}
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600 font-medium mb-2">Test Kullanıcıları:</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>customer@commerce.com (Şifre: 123456)</li>
                  <li>store@commerce.com (Şifre: 123456)</li>
                  <li>admin@commerce.com (Şifre: 123456)</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;