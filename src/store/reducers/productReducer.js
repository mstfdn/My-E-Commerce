const initialState = {
  categories: [],
  products: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: '',
  loading: false,
  error: null,
  fetchState: 'NOT_FETCHED',
  hasMore: true
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
        products: action.payload.offset === 0 
          ? action.payload.products 
          : [...state.products],
        total: action.payload.total,
        limit: action.payload.limit,
        offset: action.payload.offset,
        fetchState: 'FETCHED',
        hasMore: action.payload.products.length > 0 && 
                (state.offset + state.limit) < action.payload.total
      };
    
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        fetchState: 'FAILED'
      };
    
    case 'LOAD_MORE_PRODUCTS_START':
      return {
        ...state,
        loading: true
      };
    
    case 'LOAD_MORE_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload.products],
        hasMore: action.payload.products.length > 0 && 
                (state.offset + state.limit) < action.payload.total
      };
    
    default:
      return state;
  }
};

export default productReducer;