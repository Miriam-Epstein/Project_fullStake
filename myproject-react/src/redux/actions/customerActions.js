

// פעולה לשינוי currentCustomer
export const setCurrentCustomer = (customer) => ({
    type: 'SET_CURRENT_CUSTOMER',
    payload: customer,
  });
  
  // פעולה לשינוי passUser
  export const setPassUser = (passUser) => ({
    type: 'SET_PASS_USER',
    payload: passUser,
  });
  
  // פעולה לשינוי customerId
  export const setCustomerId = (customerId) => ({
    type: 'SET_CUSTOMER_ID',
    payload: customerId,
  });
  