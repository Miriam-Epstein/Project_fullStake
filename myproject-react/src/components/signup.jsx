import { useState } from "react";
import { addCustomerReact } from "../axios/Customeraxios";
import { useDispatch } from "react-redux";
import { setCurrentCustomer, setCustomerId, setPassUser } from "../redux/actions/customerActions";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock, FiCreditCard, FiUserPlus, FiLoader } from "react-icons/fi";
import "./signup.css";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [use, setUse] = useState({
    customerId: 0,
    name: "",
    password: "",
    creditInfo: ""
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!use.name) newErrors.name = "שם חובה";
    if (!use.password) newErrors.password = "סיסמה חובה";
    if (!use.creditInfo) newErrors.creditInfo = "פרטי אשראי חובה";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signupGood = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const y = (await addCustomerReact(use)).data;
      
      if (y) {
        alert("שלום וברכה נרשמת בהצלחה אתה מועבר להתחברות");
        
        dispatch(setCurrentCustomer(use.name));
        dispatch(setCustomerId(y));
        dispatch(setPassUser(use.password));

        sessionStorage.setItem("currentCustomer", use.name);
        sessionStorage.setItem("customerId", y);
        sessionStorage.setItem("passUser", use.password);

        navigate("/login");
      } else {
        alert("נכשל, לא הצליח להירשם");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-icon">✨</div>
          <h1 className="signup-title">צור חשבון</h1>
          <p className="signup-subtitle">הצטרף אלינו היום</p>
        </div>

        <div className="form-group">
          <label className="form-label">שם לקוח</label>
          <div className="form-input-wrapper">
            <FiUser className="form-icon" />
            <input
              className={`form-input ${errors.name ? 'error' : ''}`}
              type="text"
              placeholder="הכנס שם לקוח"
              value={use.name}
              onChange={(e) => setUse({ ...use, name: e.target.value })}
              disabled={loading}
            />
          </div>
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">סיסמה</label>
          <div className="form-input-wrapper">
            <FiLock className="form-icon" />
            <input
              className={`form-input ${errors.password ? 'error' : ''}`}
              type="password"
              placeholder="הכנס סיסמה"
              value={use.password}
              onChange={(e) => setUse({ ...use, password: e.target.value })}
              disabled={loading}
            />
          </div>
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label className="form-label">פרטי אשראי</label>
          <div className="form-input-wrapper">
            <FiCreditCard className="form-icon" />
            <input
              className={`form-input ${errors.creditInfo ? 'error' : ''}`}
              type="text"
              placeholder="הכנס פרטי אשראי"
              value={use.creditInfo}
              onChange={(e) => setUse({ ...use, creditInfo: e.target.value })}
              disabled={loading}
            />
          </div>
          {errors.creditInfo && <div className="error-message">{errors.creditInfo}</div>}
        </div>

        <button
          className="signup-button"
          onClick={signupGood}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="loading-spinner"></div>
              נרשם...
            </>
          ) : (
            <>
              <FiUserPlus /> הירשם
            </>
          )}
        </button>

        <div className="footer-link">
          כבר יש לך חשבון? <a href="#/login">התחבר</a>
        </div>
      </div>
    </div>
  );
};
