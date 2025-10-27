import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { haveThisCustomerReact } from "../axios/Customeraxios";
import { setCurrentCustomer, setPassUser, setCustomerId } from "../redux/actions/customerActions";
import { clearSal } from "../redux/actions/shoppingActions";
import { FiUser, FiLock, FiLogIn, FiLoader } from "react-icons/fi";
import "./login.css";

export const Login = () => {
  const [customer, setCustomer] = useState({ name: "", pass: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    if (!customer.name) newErrors.name = "שם חובה";
    if (!customer.pass) newErrors.pass = "סיסמה חובה";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      // Manager login
      if (customer.name === "manager" && customer.pass === "1234") {
        dispatch(setCurrentCustomer("manager"));
        dispatch(setPassUser("1234"));
        dispatch(setCustomerId(-1));
        dispatch(clearSal());

        sessionStorage.setItem("currentCustomer", "manager");
        sessionStorage.setItem("passUser", "1234");
        sessionStorage.setItem("customerId", "-1");
        
        navigate("/home");
        return;
      }

      // Regular customer login
      const response = await haveThisCustomerReact(customer.name, customer.pass);
      const customerCode = response.data;

      if (customerCode !== 0) {
        alert("שלום וברכה אתה קיים במערכת");
        dispatch(setCurrentCustomer(customer.name));
        dispatch(setPassUser(customer.pass));
        dispatch(setCustomerId(customerCode));
        dispatch(clearSal());

        sessionStorage.setItem("currentCustomer", customer.name);
        sessionStorage.setItem("passUser", customer.pass);
        sessionStorage.setItem("customerId", customerCode);
        
        navigate("/home");
      } else {
        alert("הלקוח לא קיים במערכת");
        alert("אתה מועבר להרשמה לאתר בהצלחה");
        dispatch(setCurrentCustomer("לא מחובר"));
        dispatch(setCustomerId(0));
        navigate("/signup");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">🔐</div>
          <h1 className="login-title">ברוך הבא</h1>
          <p className="login-subtitle">התחבר לחשבון שלך</p>
        </div>

        <div className="form-group">
          <label className="form-label">שם</label>
          <div className="form-input-wrapper">
            <FiUser className="form-icon" />
            <input
              type="text"
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="הכנס את שמך"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
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
              type="password"
              className={`form-input ${errors.pass ? 'error' : ''}`}
              placeholder="הכנס את הסיסמה שלך"
              value={customer.pass}
              onChange={(e) => setCustomer({ ...customer, pass: e.target.value })}
              disabled={loading}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          {errors.pass && <div className="error-message">{errors.pass}</div>}
        </div>

        <button
          className="login-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="loading-spinner"></div>
              מתחבר...
            </>
          ) : (
            <>
              <FiLogIn /> התחבר
            </>
          )}
        </button>

        <div className="footer-link">
          אין לך חשבון? <a href="#/signup">הירשם</a>
        </div>
      </div>
    </div>
  );
};
