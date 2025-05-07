// Product Actions
export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  payload: categories
});

export const setProductList = (products) => ({
  type: 'SET_PRODUCT_LIST',
  payload: products
});

export const setTotal = (total) => ({
  type: 'SET_TOTAL',
  payload: total
});

export const setFetchState = (state) => ({
  type: 'SET_FETCH_STATE',
  payload: state
});

export const setLimit = (limit) => ({
  type: 'SET_LIMIT',
  payload: limit
});

export const setOffset = (offset) => ({
  type: 'SET_OFFSET',
  payload: offset
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter
});


// Kategori çekme thunk action'ı
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(setFetchState('FETCHING'));
      const response = await fetch('https://workintech-fe-ecommerce.onrender.com/categories');
      const data = await response.json();
      
      dispatch(setCategories(data));
      dispatch(setFetchState('FETCHED'));
      return data;
    } catch (error) {
      console.error('Kategoriler yüklenirken hata oluştu:', error);
      dispatch(setFetchState('FAILED'));
    }
  };
};


export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PRODUCTS_START' });
    
    const response = await fetch('https://workintech-fe-ecommerce.onrender.com/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    dispatch({ 
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: {
        products: data.products,
        total: data.total
      }
    });
  } catch (error) {
    dispatch({ 
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error.message 
    });
  }
};