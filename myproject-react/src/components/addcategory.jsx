

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReactCategory, getAllReactCategorys } from "../axios/Categoryaxios";
import { setCategoriesAction } from "../redux/actions/categoryActions";
import { useNavigate } from "react-router-dom";

export const Addcategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    categoryId: 0,
    categoryName: ""
  });

  const addGood = async () => {
    console.log("שולח לשרת קטגוריה חדשה:", item);
    try {
      const response = await addReactCategory(item);
      if (response?.data) {
        alert("הקטגוריה נוספה בהצלחה");

        const all = await getAllReactCategorys();
        if (all?.data) {
          dispatch(setCategoriesAction(all.data));
        }

        // ניקוי שדות
        setItem({ categoryId: 0, categoryName: "" });
        navigate("/categorys");

      } else {
        alert("אוי, הקטגוריה לא נוספה (data ריק)");
      }
    } catch (error) {
      console.error("שגיאה בהוספה לשרת:", error);
      alert("נכשל בהוספה לשרת");
    }
  };

  return (
    <div className="container mt-4">
      {/* //אין צורך בלהכניס אידי של קטגוריה כי זה אוטמטי */}
      {/* <input
        className="form-control"
        type="number"
        placeholder="categoryId"
        value={item.categoryId}
        onChange={(e) => setItem({ ...item, categoryId: +e.target.value })}
      /> */}
      
      <input
        className="form-control mt-2"
        type="text"
        placeholder="categoryName"
        value={item.categoryName}
        onChange={(e) => setItem({ ...item, categoryName: e.target.value })}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button className="btn btn-primary" onClick={addGood}>
          save_addCategory
        </button>
      </div>
    </div>
  );
};



