import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateReactGames, getGameReactById } from "../axios/Gameaxios";
import { updateGameAction } from "../redux/actions/gameActions";
import { FiLoader, FiSave, FiEdit } from "react-icons/fi";
import "./updategame.css";

export const Updategame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gameId } = useParams();

  const gameFromRedux = useSelector(state =>
    state.game.games.find(g => g.gameId === +gameId)
  );

  const [item, setitem] = useState({
    gameId: 0,
    productName: "",
    categoryCode: 0,
    price: 0,
    picture: "",
    quantityInStock: 0,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (gameFromRedux) {
        setitem(gameFromRedux);
      } else {
        let res = await getGameReactById(gameId);
        if (res.data) {
          setitem(res.data);
        }
      }
    };
    fetchData();
  }, [gameFromRedux, gameId]);

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

  const updateGood = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      let res = await updateReactGames(item.gameId, item);
      if (res.data) {
        dispatch(updateGameAction(res.data));
        alert("עודכן בהצלחה");
        navigate("/games");
      } else {
        alert("לא הצליח לעדכן");
      }
    } catch (error) {
      console.error("Error updating game:", error);
      alert("שגיאה בעדכון המשחק");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="update-game-container">
      <div className="update-game-card">
        <div className="update-game-header">
          <h1 className="update-game-title">✏️ עדכון משחק</h1>
          <p className="update-game-subtitle">עדכן את פרטי המשחק</p>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="form-label">שם המשחק *</label>
            <input
              type="text"
              className={`form-input ${errors.productName ? 'error' : ''}`}
              placeholder="הכנס שם משחק"
              value={item.productName}
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
              value={item.categoryCode}
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
              value={item.price}
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
              value={item.picture}
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
              value={item.quantityInStock}
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
            onClick={updateGood}
            disabled={loading}
          >
            {loading ? (
              <>
                <FiLoader className="spinning" /> מעבד...
              </>
            ) : (
              <>
                <FiSave /> עדכן משחק
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
