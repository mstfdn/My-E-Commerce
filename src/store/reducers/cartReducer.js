import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from '../actions/cartActions';

// Başlangıç durumu
const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0
};

// Cart reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      
      if (existingItemIndex >= 0) {
        // Ürün zaten sepette varsa miktarını artır
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + newItem.quantity
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + newItem.quantity,
          totalAmount: state.totalAmount + (newItem.price * newItem.quantity)
        };
      } else {
        // Yeni ürün ekle
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + newItem.quantity,
          totalAmount: state.totalAmount + (newItem.price * newItem.quantity)
        };
      }
      
    case REMOVE_FROM_CART:
      const productId = action.payload;
      const itemToRemove = state.items.find(item => item.id === productId);
      
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== productId),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity)
      };
      
    case UPDATE_CART_QUANTITY:
      const { productId: id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      
      if (itemIndex < 0) return state;
      
      const item = state.items[itemIndex];
      const quantityDiff = quantity - item.quantity;
      
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = {
        ...item,
        quantity: quantity
      };
      
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
        totalAmount: state.totalAmount + (item.price * quantityDiff)
      };
      
    case CLEAR_CART:
      return {
        ...initialState
      };
      
    default:
      return state;
  }
};

export default cartReducer;