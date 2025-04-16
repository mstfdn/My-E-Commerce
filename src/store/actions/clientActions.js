// Client Actions
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user
});

export const setRoles = (roles) => ({
  type: 'SET_ROLES',
  payload: roles
});

export const setTheme = (theme) => ({
  type: 'SET_THEME',
  payload: theme
});

export const setLanguage = (language) => ({
  type: 'SET_LANGUAGE',
  payload: language
});

// Thunk action creator for fetching roles
export const fetchRoles = () => {
  return async (dispatch, getState) => {
    // Sadece ihtiyaç olduğunda çağrılmalı
    const { client } = getState();
    
    // Eğer roller zaten yüklenmişse, tekrar yükleme
    if (client.roles && client.roles.length > 0) {
      return;
    }
    
    try {
      // API'den rolleri al (örnek)
      const response = await fetch('https://api.example.com/roles');
      const roles = await response.json();
      
      // Store'a rolleri kaydet
      dispatch(setRoles(roles));
    } catch (error) {
      console.error('Roller yüklenirken hata oluştu:', error);
    }
  };
};