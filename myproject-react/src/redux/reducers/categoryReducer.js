

import { ADD_CATEGORY, SET_CATEGORIES } from "../actions/categoryActions";

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case SET_CATEGORIES:
      console.log("Updating categories state:", action.payload); // הודעה זו תראה אם הנתונים המתקבלים נכונים
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;






// //********************רידקס +שליחה לשרת/*/******** */ */
// import { ADD_CATEGORY } from "../actions/categoryActions";

// const initialState = {
//   categories: [],
// };

// export const categoryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CATEGORY:
//       return {
//         ...state,
//         categories: [...state.categories, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default categoryReducer; // חשוב כדי שייבוא ב-store לא יפול


