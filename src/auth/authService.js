import api from './api';
import { setUser } from '../store/actions/clientActions';
import { toast } from 'react-toastify';

// Token'ı axios header'ına ekle
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Token'ı doğrula ve kullanıcı bilgilerini getir
export const verifyToken = async (dispatch) => {
  try {
    // localStorage'dan token'ı al
    const token = localStorage.getItem('token');
    
    if (!token) {
      return false;
    }
    
    // Token'ı axios header'ına ekle
    setAuthToken(token);
    
    // Token'ı doğrula
    const response = await api.get('/verify');
    
    // Kullanıcı bilgilerini Redux store'a kaydet
    dispatch(setUser(response.data.user));
    
    // Token'ı yenile
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      setAuthToken(response.data.token);
    }
    
    return true;
  } catch (error) {
    console.error('Token doğrulama hatası:', error);
    
    // Token geçersizse localStorage ve axios header'dan temizle
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthToken(null);
    
    return false;
  }
};