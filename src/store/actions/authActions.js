import api from '../../auth/api';
import { setUser } from './clientActions';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../auth/authService';

// Login işlemi için thunk action creator
export const loginUser = (credentials, history, rememberMe, prevPath) => {
  return async (dispatch) => {
    try {
      // API'ye login isteği gönder
      const response = await api.post('/login', credentials);
      
      // Kullanıcı bilgilerini store'a kaydet
      dispatch(setUser(response.data.user));
      
      // Token'ı localStorage veya sessionStorage'a kaydet
      if (rememberMe) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      } else {
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      // Token'ı axios header'ına ekle
      setAuthToken(response.data.token);
      
      toast.success('Giriş başarılı!');
      
      // Kullanıcıyı önceki sayfaya veya ana sayfaya yönlendir
      history.push(prevPath || '/');
      
      return { 
        success: true,
        user: response.data.user
      };
    } catch (error) {
      console.error('Giriş yapılırken hata:', error);
      
      toast.error(error.response?.data?.message || 'Giriş sırasında bir hata oluştu. Lütfen bilgilerinizi kontrol edin.');
      
      return { 
        success: false, 
        error: error.response?.data?.message || 'Giriş yapılırken bir hata oluştu'
      };
    }
  };
};

// Kullanıcı çıkışı için action creator
export const logoutUser = () => {
  return (dispatch) => {
    // LocalStorage ve SessionStorage'dan kullanıcı bilgilerini temizle
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    
    // Token'ı axios header'dan temizle
    setAuthToken(null);
    
    // Redux store'dan kullanıcı bilgilerini temizle
    dispatch(setUser({}));
    
    toast.success('Çıkış yapıldı');
    
    // Not: Burada history.push('/login') yapmıyoruz çünkü
    // bu fonksiyon component dışında ve history nesnesi yok
    // Yönlendirmeyi Header.jsx'te handleLogout fonksiyonunda yapacağız
    
    return { success: true };
  };
};

// Default export olarak tüm action'ları içeren bir obje ekleyelim
export default {
  loginUser,
  logoutUser
};