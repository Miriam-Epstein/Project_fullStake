import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiLogIn, FiUserPlus, FiShoppingCart, FiUser, FiGrid, FiBox, FiLogOut } from "react-icons/fi";
import { setCurrentCustomer, setPassUser, setCustomerId } from "../redux/actions/customerActions";
import { clearSal } from "../redux/actions/shoppingActions";
import "./menu.css";

export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCustomer = useSelector(state => state.customer.currentCustomer);

  const handleLogout = () => {
    // ניקוי Redux state
    dispatch(setCurrentCustomer("לא מחובר"));
    dispatch(setPassUser("000"));
    dispatch(setCustomerId(0));
    dispatch(clearSal());

    // ניקוי sessionStorage
    sessionStorage.removeItem("currentCustomer");
    sessionStorage.removeItem("passUser");
    sessionStorage.removeItem("customerId");

    // ניווט לעמוד הבית
    navigate("/home");
  };

  return (
    <nav className="modern-nav">
      {/* Brand */}
      <NavLink to="/home" className="nav-brand">
        <FiBox size={24} />
        <span>חנות משחקים</span>
      </NavLink>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li className="nav-link-item">
          <NavLink className="nav-link-modern" to="/home">
            <FiHome /> בית
          </NavLink>
        </li>
        
        <li className="nav-link-item">
          <NavLink className="nav-link-modern" to="/login">
            <FiLogIn /> התחברות
          </NavLink>
        </li>
        
        <li className="nav-link-item">
          <NavLink className="nav-link-modern" to="/signup">
            <FiUserPlus /> הרשמה
          </NavLink>
        </li>

        {/* Shopping Basket - only for non-managers */}
        {currentCustomer !== 'manager' && (
          <li className="nav-link-item">
            <NavLink className="nav-link-modern" to="/shoppingbasket">
              <FiShoppingCart /> עגלה
            </NavLink>
          </li>
        )}

        {/* Personal Area - only for logged in users (not managers) */}
        {currentCustomer !== "לא מחובר" && currentCustomer !== 'manager' && (
          <li className="nav-link-item">
            <NavLink className="nav-link-modern" to="/personalarea">
              <FiUser /> אזור אישי
            </NavLink>
          </li>
        )}

        {/* Manager Options */}
        {currentCustomer === 'manager' && (
          <>
            <li className="nav-link-item">
              <NavLink className="nav-link-modern" to="/categorys">
                <FiGrid /> קטגוריות
              </NavLink>
            </li>
            <li className="nav-link-item">
              <NavLink className="nav-link-modern" to="/games">
                <FiBox /> משחקים
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* User Info & Logout */}
      <div className="user-info">
        <span className={currentCustomer === 'manager' ? 'user-badge manager-badge' : 'user-badge'}>
          {currentCustomer}
        </span>
        {(currentCustomer !== "לא מחובר" && currentCustomer !== null) && (
          <button className="logout-button" onClick={handleLogout}>
            <FiLogOut /> התנתק
          </button>
        )}
      </div>
    </nav>
  );
};


