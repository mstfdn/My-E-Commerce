const initialState = {
  categories: [],
  products: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: '',
  loading: false,
  error: null,
  fetchState: 'NOT_FETCHED'
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      };
    
    case 'SET_PRODUCT_LIST':
      return {
        ...state,
        products: action.payload
      };
      
    case 'SET_TOTAL':
      return {
        ...state,
        total: action.payload
      };
      
    case 'SET_FETCH_STATE':
      return {
        ...state,
        fetchState: action.payload
      };
      
    case 'SET_LIMIT':
      return {
        ...state,
        limit: action.payload
      };
      
    case 'SET_OFFSET':
      return {
        ...state,
        offset: action.payload
      };
      
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };

    case 'FETCH_PRODUCTS_START':
      return {
        ...state,
        loading: true,
        error: null,
        fetchState: 'FETCHING'
      };
    
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        total: action.payload.total,
        fetchState: 'FETCHED'
      };
    
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetchState: 'FAILED'
      };
    
    default:
      return state;
  }
};

export default productReducer;