import api from '../../auth/api';
import { setUser } from './clientActions';
import { toast } from 'react-toastify';

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
        // Kullanıcı bilgilerini de localStorage'a kaydedelim
        localStorage.setItem('user', JSON.stringify(response.data.user));
      } else {
        // Session storage'a kaydet (tarayıcı kapandığında silinir)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      toast.success('Giriş başarılı!');
      
      // Kullanıcıyı önceki sayfaya veya ana sayfaya yönlendir
      history.push(prevPath || '/');
      
      return { success: true };
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
export const logoutUser = (history) => {
  return (dispatch) => {
    // Kullanıcı bilgilerini temizle
    dispatch(setUser({}));
    
    // Token'ı localStorage ve sessionStorage'dan sil
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    
    // Ana sayfaya yönlendir
    if (history) {
      history.push('/');
    }
  };
};

// Default export olarak tüm action'ları içeren bir obje ekleyelim
export default {
  loginUser,
  logoutUser
};