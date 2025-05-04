

export const setSal = (newSal) => {
    return {
      type: 'SET_SAL',
      payload: newSal,
    };
  };
  
  export const setSum = (newSum) => {
    return {
      type: 'SET_SUM',
      payload: newSum,
    };
  };
  
  // הוספת האקשנים החסרים
  export const setCustomer = (newCustomer) => {
    return {
      type: 'SET_CUSTOMER',
      payload: newCustomer,
    };
  };
  
  export const setPassUser = (newPassUser) => {
    return {
      type: 'SET_PASS_USER',
      payload: newPassUser,
    };
  };
  
  export const clearSal = () => {
    return {
      type: 'CLEAR_SAL',
    };
  };
  
  