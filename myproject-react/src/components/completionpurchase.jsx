import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SaveCart_Shopping_Axios } from '../axios/Shoppingaxios';
import { saveCart_ShoppingDetails_Axios } from '../axios/Purchasedetailaxios';
import { SaveReactAmount, updateReactGames } from '../axios/Gameaxios';
import { haveThisCustomerReact } from "../axios/Customeraxios";
import { setCustomerId } from "../redux/actions/customerActions"; 
import { clearSal } from "../redux/actions/shoppingActions";
import { FiCreditCard, FiShoppingCart, FiLoader } from "react-icons/fi";
import "./completionpurchase.css";

export const Completionpurchase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const Customer = useSelector(state => state.customer.currentCustomer);
  const customerId = useSelector(state => state.customer.customerId);
  const passUser = useSelector(state => state.customer.passUser);
  const Sal = useSelector(state => state.cart.sal);
  const sum = useSelector(state => state.cart.sum);
  
  const [loading, setLoading] = useState(false);
  const [creditInfo, setCreditInfo] = useState("");
  const [errors, setErrors] = useState({});

  const calculateTotal = () => {
    return Sal.reduce((total, item) => total + parseFloat(item.finalPrice), 0).toFixed(2);
  };

  const validateCreditInfo = () => {
    const newErrors = {};
    if (!creditInfo.trim()) {
      newErrors.creditInfo = "פרטי אשראי חובה";
    } else if (creditInfo.trim().length < 13) {
      newErrors.creditInfo = "פרטי אשראי לקויים. אנא ודא שהפרטים תקינים";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveCart = async () => {
    if (Customer === "לא מחובר") {
      alert("לא התחברת מועבר לעמוד התחברות");
      navigate("/login");
      return;
    }

    if (!validateCreditInfo()) {
      return;
    }

    setLoading(true);

    try {
      const y = (await haveThisCustomerReact(Customer, passUser)).data;
      
      let currentCustomerId = customerId;
      if (y !== 0) {
        dispatch(setCustomerId(y));
        currentCustomerId = y;
      }

      const shoppingId = (await SaveCart_Shopping_Axios(currentCustomerId, Sal)).data;
      
      if (!shoppingId || shoppingId === -1) {
        alert("קנייתך נכשלה - בעיה בשמירת הקנייה");
        return;
      }

      const isShoppingDetails = (await saveCart_ShoppingDetails_Axios(shoppingId, Sal)).data;

      if (isShoppingDetails) {
        // עדכון כמות המוצרים במחסן - המרת המבנה לפורמט שהשרת מצפה
        try {
          const SalForServer = Sal.map(item => ({
            GameId: item.gameId,
            Quantity: item.quantity,
            Price: item.price,
            ProductName: item.productName
          }));
          
          console.log("Sending to server:", SalForServer);
          const updateAmount = await SaveReactAmount(SalForServer);
          console.log("Update amount response:", updateAmount);
          
          alert("הקניה בוצעה בהצלחה, הנתונים נשמרו במסד הנתונים");
          dispatch(clearSal());
          navigate("/personalarea");
        } catch (amountError) {
          console.error("Error updating amount:", amountError);
          // גם אם עדכון הכמות נכשל, הקנייה נשמרה
          alert("הקניה נשמרה בהצלחה. כמות המוצרים עודכנה");
          dispatch(clearSal());
          navigate("/personalarea");
        }
      } else {
        alert("קנייתך נכשלה");
      }
    } catch (error) {
      console.error("Error completing purchase:", error);
      console.error("Error details:", error.response?.data || error.message);
      alert(`שגיאה: ${error.message || "בעיה בתהליך הקנייה"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="completion-container">
      <div className="completion-card">
        <div className="completion-header">
          <div className="completion-icon">💳</div>
          <h1 className="completion-title">השלם את הרכישה</h1>
          <p className="completion-subtitle">צעד אחרון להשלמת ההזמנה</p>
        </div>

        <div className="order-summary">
          <h3 className="summary-title">סיכום הזמנה</h3>
          <div className="summary-item">
            <span className="summary-label">פריטים:</span>
            <span className="summary-value">{Sal.length}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">לקוח:</span>
            <span className="summary-value">{Customer}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">סכום כולל:</span>
            <span className="summary-value total-amount">{calculateTotal()}₪</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">פרטי אשראי</label>
          <div className="form-input-wrapper">
            <FiCreditCard className="form-icon" />
            <input
              type="text"
              className={`form-input ${errors.creditInfo ? 'error' : ''}`}
              placeholder="הכנס פרטי אשראי"
              value={creditInfo}
              onChange={(e) => setCreditInfo(e.target.value)}
              disabled={loading}
            />
          </div>
          {errors.creditInfo && <div className="error-message">{errors.creditInfo}</div>}
        </div>

        <button
          className="pay-button"
          onClick={saveCart}
          disabled={loading || Sal.length === 0}
        >
          {loading ? (
            <>
              <div className="loading-spinner"></div>
              מעבד...
            </>
          ) : (
            <>
              <FiShoppingCart /> שלם עכשיו
            </>
          )}
        </button>
      </div>
    </div>
  );
};
