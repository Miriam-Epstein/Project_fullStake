import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReactCategory, getAllReactCategorys } from "../axios/Categoryaxios";
import { setCategoriesAction } from "../redux/actions/categoryActions";
import { useNavigate } from "react-router-dom";
import { FiLoader, FiSave, FiTag } from "react-icons/fi";
import "./addcategory.css";

export const Addcategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    categoryId: 0,
    categoryName: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addGood = async () => {
    if (!item.categoryName.trim()) {
      setError("שם קטגוריה חובה");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const response = await addReactCategory(item);
      if (response?.data) {
        alert("הקטגוריה נוספה בהצלחה");

        const all = await getAllReactCategorys();
        if (all?.data) {
          dispatch(setCategoriesAction(all.data));
        }

        navigate("/categorys");
      } else {
        setError("הקטגוריה לא נוספה");
      }
    } catch (error) {
      console.error("שגיאה בהוספה לשרת:", error);
      setError("נכשל בהוספה לשרת");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-category-container">
      <div className="add-category-card">
        <div className="add-category-header">
          <h1 className="add-category-title">🏷️ הוסף קטגוריה חדשה</h1>
          <p className="add-category-subtitle">הוסף קטגוריה חדשה למערכת</p>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">שם הקטגוריה *</label>
            <input
              type="text"
              className={`form-input ${error ? 'error' : ''}`}
              placeholder="הכנס שם קטגוריה"
              value={item.categoryName}
              onChange={(e) => setItem({ ...item, categoryName: e.target.value })}
              disabled={loading}
            />
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>

        <div className="form-actions">
          <button
            className="cancel-button"
            onClick={() => navigate("/categorys")}
            disabled={loading}
          >
            ביטול
          </button>
          <button
            className="save-button"
            onClick={addGood}
            disabled={loading}
          >
            {loading ? (
              <>
                <FiLoader className="spinning" /> מעבד...
              </>
            ) : (
              <>
                <FiSave /> שמור קטגוריה
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};



