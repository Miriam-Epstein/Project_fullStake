

//***********************אחרי שינוי לרידקס********* */

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteReactCategory } from "../axios/Categoryaxios";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesAction } from "../redux/actions/categoryActions";

export const Deletecategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // שליפת רשימת הקטגוריות מה־Redux
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    const deletGood = async () => {
      try {
        const response = await deleteReactCategory(id);
        if (response?.data) {
          alert("הקטגוריה נמחקה בהצלחה");

          // סינון הקטגוריה שנמחקה מתוך ה־store
          const updated = categories.filter((cat) => cat.categoryId !== +id);
          dispatch(setCategoriesAction(updated));

          // חזרה אוטומטית לדף הקטגוריות
          navigate("/categorys");
        } else {
          alert("שגיאה במחיקה");
        }
      } catch (error) {
        console.error("שגיאה במחיקת קטגוריה:", error);
        alert("נכשל למחוק מהשרת");
      }
    };

    deletGood();
  }, [id, dispatch, categories, navigate]);

  return (
    <div className="container mt-4">
      <h3>מוחק קטגוריה...</h3>
    </div>
  );
};
