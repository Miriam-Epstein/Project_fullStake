

const initialState = {
  currentCustomer: "no counct",  // ברירת מחדל ללקוח
  passUser: "000",               // סיסמה או מזהה אחר
  customerId: 0                  // קוד מזהה של הלקוח
};

// הפונקציה שמקבלת כל פעולה (action) ומעדכנת סטייט
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CUSTOMER':
      return { ...state, currentCustomer: action.payload };
    case 'SET_PASS_USER':
      return { ...state, passUser: action.payload };
    case 'SET_CUSTOMER_ID':
      return { ...state, customerId: action.payload };
    default:
      return state;
  }
};

export default customerReducer;
