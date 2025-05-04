const initialState = {
    purchaseDetails: [],
  };
  
  const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PURCHASE_DETAILS':
        return {
          ...state,
          purchaseDetails: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default purchaseReducer;
  