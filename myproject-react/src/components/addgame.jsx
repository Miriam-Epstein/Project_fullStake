import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReactGames } from "../axios/Gameaxios";
import { addGameAction } from "../redux/actions/gameActions";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiLoader, FiSave } from "react-icons/fi";
import "./addgame.css";

export const Addgame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setitem] = useState({
    productName: "",
    categoryCode: 0,
    price: 0,
    picture: "",
    quantityInStock: 0,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!item.productName.trim()) {
      newErrors.productName = "שם משחק חובה";
    }
    if (item.categoryCode <= 0) {
      newErrors.categoryCode = "קוד קטגוריה חובה";
    }
    if (item.price <= 0) {
      newErrors.price = "מחיר חייב להיות גדול מ-0";
    }
    if (!item.picture.trim()) {
      newErrors.picture = "כתובת תמונה חובה";
    }
    if (item.quantityInStock < 0) {
      newErrors.quantityInStock = "כמות במלאי לא יכולה להיות שלילית";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addGood = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      let res = await addReactGames(item);
      if (res.data) {
        dispatch(addGameAction(res.data));
        alert("המשחק נוסף בהצלחה");
        navigate("/games");
      } else {
        alert("נכשלת בהוספה");
      }
    } catch (error) {
      console.error("Error adding game:", error);
      alert("שגיאה בהוספת המשחק");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-game-container">
      <div className="add-game-card">
        <div className="add-game-header">
          <h1 className="add-game-title">➕ הוסף משחק חדש</h1>
          <p className="add-game-subtitle">מלא את הפרטים להוספת משחק חדש למערכת</p>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">שם המשחק *</label>
            <input
              type="text"
              className={`form-input ${errors.productName ? 'error' : ''}`}
              placeholder="הכנס שם משחק"
              onChange={(e) => setitem({ ...item, productName: e.target.value })}
              disabled={loading}
            />
            {errors.productName && <div className="error-message">{errors.productName}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">קוד קטגוריה *</label>
            <input
              type="number"
              className={`form-input ${errors.categoryCode ? 'error' : ''}`}
              placeholder="הכנס קוד קטגוריה"
              onChange={(e) => setitem({ ...item, categoryCode: +e.target.value })}
              disabled={loading}
            />
            {errors.categoryCode && <div className="error-message">{errors.categoryCode}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">מחיר (₪) *</label>
            <input
              type="number"
              step="0.01"
              className={`form-input ${errors.price ? 'error' : ''}`}
              placeholder="הכנס מחיר"
              onChange={(e) => setitem({ ...item, price: +e.target.value })}
              disabled={loading}
            />
            {errors.price && <div className="error-message">{errors.price}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">כתובת תמונה *</label>
            <input
              type="text"
              className={`form-input ${errors.picture ? 'error' : ''}`}
              placeholder="הכנס כתובת תמונה"
              onChange={(e) => setitem({ ...item, picture: e.target.value })}
              disabled={loading}
            />
            {errors.picture && <div className="error-message">{errors.picture}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">כמות במלאי *</label>
            <input
              type="number"
              className={`form-input ${errors.quantityInStock ? 'error' : ''}`}
              placeholder="הכנס כמות במלאי"
              onChange={(e) => setitem({ ...item, quantityInStock: +e.target.value })}
              disabled={loading}
            />
            {errors.quantityInStock && <div className="error-message">{errors.quantityInStock}</div>}
          </div>
        </div>

        <div className="form-actions">
          <button
            className="cancel-button"
            onClick={() => navigate("/games")}
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
                <FiSave /> שמור משחק
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
























