// LocalStorage işlemleri için yardımcı fonksiyonlar

// Token kaydetme
export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

// Kullanıcı bilgilerini kaydetme
export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// Token alma
export const getToken = () => {
  return localStorage.getItem('token');
};

// Kullanıcı bilgilerini alma
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Token ve kullanıcı bilgilerini silme
export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Session storage işlemleri
export const saveTokenToSession = (token) => {
  sessionStorage.setItem('token', token);
};

export const saveUserToSession = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

export const clearSessionAuth = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
};