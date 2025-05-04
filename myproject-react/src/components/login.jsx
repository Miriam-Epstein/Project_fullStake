
//***********סל קניות מתעדכן********** */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { haveThisCustomerReact } from "../axios/Customeraxios";
import { setCurrentCustomer, setPassUser, setCustomerId } from "../redux/actions/customerActions";
import { clearSal } from "../redux/actions/shoppingActions"; // ✅ נוספה שורה זו

export const Login = () => {
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (customer.name === "manager" && customer.pass === "1234") {
      dispatch(setCurrentCustomer("manager"));
      dispatch(setPassUser("1234"));
      dispatch(setCustomerId(-1));
      dispatch(clearSal()); // גם מנהל מתחיל עם סל ריק

      sessionStorage.setItem("currentCustomer", "manager");
      sessionStorage.setItem("passUser", "1234");
      sessionStorage.setItem("customerId", "-1");
      navigate("/home");
    } else {
      try {
        const response = await haveThisCustomerReact(customer.name, customer.pass);
        const customerCode = response.data;

        if (customerCode !== 0) {
          alert("שלום וברכה אתה קיים במערכת ");
          dispatch(setCurrentCustomer(customer.name));
          dispatch(setPassUser(customer.pass));
          dispatch(setCustomerId(customerCode));
          dispatch(clearSal()); // איפוס הסל אחרי התחברות

          sessionStorage.setItem("currentCustomer", customer.name);
          sessionStorage.setItem("passUser", customer.pass);
          sessionStorage.setItem("customerId", customerCode);
         
          navigate("/home");
        } else {
          alert("הלקוח לא קיים במערכת");
          alert("אתה מועבר להרשמה לאתר בהצלחה");

          dispatch(setCurrentCustomer("no account"));
          dispatch(setCustomerId(0));
          navigate("/signup");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4" style={{ color: '#333' }}>Login</h2>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form-control" 
            placeholder="Enter your name"
            onBlur={(e) => setCustomer({ ...customer, name: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Code</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            placeholder="Enter your password"
            onBlur={(e) => setCustomer({ ...customer, pass: e.target.value })}
          />
        </div>
        <button 
          className="btn btn-info btn-block w-100" 
          onClick={handleLogin} 
          style={{ padding: '10px' }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};


