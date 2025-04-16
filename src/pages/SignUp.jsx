import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../auth/api';
import { toast } from 'react-toastify';
import { setUser } from '../store/actions/clientActions';
import { setAuthToken } from '../auth/authService';

const SignUp = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Remember Me seçeneği için state ekleyelim
  const history = useHistory();
  const dispatch = useDispatch();
  
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    defaultValues: {
      role_id: "2" // Varsayılan olarak Customer (2) seçili
    }
  });
  
  const selectedRole = watch('role_id');
  
  // Rolleri getir
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get('/roles');
        setRoles(response.data);
      } catch (error) {
        console.error('Roller yüklenirken hata oluştu:', error);
        toast.error('Roller yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
      }
    };
    
    fetchRoles();
  }, []);
  
  const onSubmit = async (data) => {
    setLoading(true);
    
    try {
      // API'ye gönderilecek veriyi hazırla
      const signupData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: parseInt(data.role_id), // String'den number'a çevir
      };
      
      // Eğer seçilen rol "store" ise, store bilgilerini ekle
      if (data.role_id === "3") {
        signupData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no || 'T0000V000000',
          bank_account: data.store_bank_account || 'TR000000000000000000000000'
        };
      }
      
      console.log('Gönderilen veri:', signupData);
      
      // API isteği gönder - doğru endpoint'i kullan
      const response = await api.post('/signup', signupData);
      
      console.log('Kayıt başarılı:', response.data);
      
      // Kullanıcı bilgilerini ve token'ı kaydet
      if (response.data.token) {
        // Beni hatırla seçeneğine göre token'ı kaydet
        if (rememberMe) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          // Token'ı axios header'ına ekle
          setAuthToken(response.data.token);
        } else {
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('user', JSON.stringify(response.data.user));
          // Token'ı axios header'ına ekle
          setAuthToken(response.data.token);
        }
        
        // Redux store'a kullanıcı bilgilerini kaydet
        dispatch(setUser(response.data.user));
      }
      
      toast.success('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
      history.push('/login');
    } catch (error) {
      // Hata işleme kodu aynı kalıyor...
    } finally {
      setLoading(false);
    }
  };
  
  // Form içeriği aynı kalıyor...
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Form içeriği aynı kalıyor... */}
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* İsim Alanı */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  {...register('name', { 
                    required: 'İsim alanı zorunludur', 
                    minLength: { value: 3, message: 'İsim en az 3 karakter olmalıdır' } 
                  })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              
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
                    required: 'Şifre alanı zorunludur',
                    minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
                    pattern: { 
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir'
                    } 
                  })}
                />
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
              </div>
              
              {/* Şifre Doğrulama Alanı */}
              <div>
                <label htmlFor="password_confirm" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  id="password_confirm"
                  type="password"
                  className={`w-full px-3 py-2 border ${errors.password_confirm ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  {...register('password_confirm', { 
                    required: 'Şifre tekrar alanı zorunludur',
                    validate: value => value === watch('password') || 'Şifreler eşleşmiyor'
                  })}
                />
                {errors.password_confirm && <p className="mt-1 text-sm text-red-500">{errors.password_confirm.message}</p>}
              </div>
              
              {/* Rol Seçimi */}
              <div>
                <label htmlFor="role_id" className="block text-sm font-medium text-gray-700 mb-1">
                  Account Type
                </label>
                <select
                  id="role_id"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('role_id', { required: true })}
                >
                  {roles.map(role => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Mağaza Bilgileri - Sadece rol "store" ise göster */}
              {selectedRole === "3" && (
                <div className="space-y-4 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium text-gray-800">Mağaza Bilgileri</h3>
                  
                  {/* Mağaza Adı */}
                  <div>
                    <label htmlFor="store_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Mağaza Adı
                    </label>
                    <input
                      id="store_name"
                      type="text"
                      className={`w-full px-3 py-2 border ${errors.store_name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      {...register('store_name', { 
                        required: 'Mağaza adı zorunludur', 
                        minLength: { value: 3, message: 'Mağaza adı en az 3 karakter olmalıdır' } 
                      })}
                    />
                    {errors.store_name && <p className="mt-1 text-sm text-red-500">{errors.store_name.message}</p>}
                  </div>
                  
                  {/* Mağaza Telefonu */}
                  <div>
                    <label htmlFor="store_phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Mağaza Telefonu
                    </label>
                    <input
                      id="store_phone"
                      type="text"
                      className={`w-full px-3 py-2 border ${errors.store_phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="05XX XXX XX XX"
                      {...register('store_phone', { 
                        required: 'Mağaza telefonu zorunludur',
                        pattern: { 
                          value: /^(05)[0-9][0-9][1-9]([0-9]){6}$/,
                          message: 'Geçerli bir Türkiye telefon numarası giriniz (05XX XXX XX XX)' 
                        } 
                      })}
                    />
                    {errors.store_phone && <p className="mt-1 text-sm text-red-500">{errors.store_phone.message}</p>}
                  </div>
                  
                  {/* Vergi Numarası */}
                  <div>
                    <label htmlFor="store_tax_no" className="block text-sm font-medium text-gray-700 mb-1">
                      Vergi Numarası
                    </label>
                    <input
                      id="store_tax_no"
                      type="text"
                      className={`w-full px-3 py-2 border ${errors.store_tax_no ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="TXXXXVXXXXXX"
                      {...register('store_tax_no', { 
                        
                        pattern: { 
                          value: /^T[0-9]{4}V[0-9]{6}$/,
                          message: 'Vergi numarası TXXXXVXXXXXX formatında olmalıdır' 
                        } 
                      })}
                    />
                    {errors.store_tax_no && <p className="mt-1 text-sm text-red-500">{errors.store_tax_no.message}</p>}
                  </div>
                  
                  {/* Banka Hesabı */}
                  <div>
                    <label htmlFor="store_bank_account" className="block text-sm font-medium text-gray-700 mb-1">
                      IBAN
                    </label>
                    <input
                      id="store_bank_account"
                      type="text"
                      className={`w-full px-3 py-2 border ${errors.store_bank_account ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="TR..."
                      {...register('store_bank_account', { 
                        
                        pattern: { 
                          value: /^TR[0-9]{2}[0-9]{5}[A-Z0-9]{17}$/,
                          message: 'Geçerli bir IBAN giriniz' 
                        } 
                      })}
                    />
                    {errors.store_bank_account && <p className="mt-1 text-sm text-red-500">{errors.store_bank_account.message}</p>}
                  </div>
                </div>
              )}
              
              {/* Kayıt Ol Butonu */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Kaydediliyor...
                    </span>
                  ) : (
                    'Register'
                  )}
                </button>
              </div>
              
              {/* Giriş Yap Linki */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                Do you already have an account?{' '}
                  <a href="/login" className="text-blue-500 hover:text-blue-600">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;