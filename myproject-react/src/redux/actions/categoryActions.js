


// קבועים לפעולות
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// פעולה להוספת קטגוריה
export const addCategoryAction = (item) => ({
  type: ADD_CATEGORY,
  payload: item,
});

// פעולה לשמירת כל הקטגוריות ברידקס
export const setCategoriesAction = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});





