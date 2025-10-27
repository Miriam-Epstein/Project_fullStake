import { useState, useEffect } from "react";
import { updateReactCaterory } from "../axios/Categoryaxios";
import { useLocation, useNavigate } from "react-router-dom";
import { FiLoader, FiSave } from "react-icons/fi";
import "./updatecategory.css";

export const Updatecategory = () => {
  const [item, setitem] = useState({
    categoryId: 0,
    categoryName: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get category ID from URL params
    const pathParts = location.pathname.split('/');
    const categoryId = parseInt(pathParts[pathParts.length - 1]);
    if (categoryId) {
      setitem(prev => ({ ...prev, categoryId }));
    }
  }, [location]);

  const updateGood = async () => {
    if (!item.categoryName.trim()) {
      setError("שם קטגוריה חובה");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const y = await updateReactCaterory(item.categoryId, item);
      if (y.data) {
        alert("עודכן בהצלחה");
        navigate("/categorys");
      } else {
        setError("לא הצליח לעדכן");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      setError("שגיאה בעדכון הקטגוריה");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="update-category-container">
      <div className="update-category-card">
        <div className="update-category-header">
          <h1 className="update-category-title">🔄 עדכון קטגוריה</h1>
          <p className="update-category-subtitle">עדכן את פרטי הקטגוריה</p>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">קוד קטגוריה</label>
            <input
              type="number"
              className="form-input disabled"
              value={item.categoryId}
              disabled
            />
          </div>

          <div className="form-group">
            <label className="form-label">שם הקטגוריה *</label>
            <input
              type="text"
              className={`form-input ${error ? 'error' : ''}`}
              placeholder="הכנס שם קטגוריה"
              value={item.categoryName}
              onChange={(e) => setitem({ ...item, categoryName: e.target.value })}
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
            onClick={updateGood}
            disabled={loading}
          >
            {loading ? (
              <>
                <FiLoader className="spinning" /> מעבד...
              </>
            ) : (
              <>
                <FiSave /> עדכן קטגוריה
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
