const initialState = {
    sal: [], 
    sum: 0,
    currentCustomer: "לא מחובר",
    passUser: null,
  };
  
  const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SAL':
        return { ...state, sal: action.payload };
      case 'SET_SUM':
        return { ...state, sum: action.payload };
      case 'SET_CUSTOMER':
        return { ...state, currentCustomer: action.payload };
      case 'SET_PASS_USER':
        return { ...state, passUser: action.payload };
        case 'CLEAR_SAL':
          return {
            ...state,
            sal: [],
            sum: 0,
          };
         
      default:
        return state;
    }
  };


  
  
  export default shoppingReducer;
  