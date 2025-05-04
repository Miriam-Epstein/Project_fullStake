
import { useState } from "react";
import { addCustomerReact } from "../axios/Customeraxios";
import { useDispatch } from "react-redux";
import { setCurrentCustomer, setCustomerId, setPassUser } from "../redux/actions/customerActions"; // הוספתי setCustomerId ו־setPassUser
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const dispatch = useDispatch();
  const [use, setUse] = useState({
    customerId: 0,
    name: "",
    password: "",
    creditInfo: ""
  });
  const navigate = useNavigate();

  const signupGood = async () => {
    if (use.name === "" || use.password === "" || use.creditInfo === "") {
      alert("לא הוכנס תקין הכנס שוב");
    } else {
      let y = (await addCustomerReact(use)).data; // y = customerId שחוזר מהשרת
      if (y) {
        //alert("שלום וברכה נרשמת בהצלחה");
        alert("שלום וברכה נרשמת בהצלחה אתה מועבר להתחברות");
        // עדכון ברידקס:
        dispatch(setCurrentCustomer(use.name));
        dispatch(setCustomerId(y));
        dispatch(setPassUser(use.password));

        // שמירה בזיכרון זמני של הדפדפן:
        sessionStorage.setItem("currentCustomer", use.name);
        sessionStorage.setItem("customerId", y);
        sessionStorage.setItem("passUser", use.password);

        navigate("/login");
      } else {
        alert("נכשל, לא הצליח להירשם");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Sign Up</h3>
          <div className="mb-3">
            <label className="form-label" htmlFor="custName">
              Customer Name
            </label>
            <input
              id="name"
              className="form-control"
              type="text"
              placeholder="Enter customer name"
              onBlur={(e) => setUse({ ...use, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-control"
              type="password"
              placeholder="Enter password"
              onBlur={(e) => setUse({ ...use, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="creditInfo">
              Credit Details
            </label>
            <input
              id="creditInfo"
              className="form-control"
              type="text"
              placeholder="Enter credit details"
              onBlur={(e) => setUse({ ...use, creditInfo: e.target.value })}
            />
          </div>
          <button
            className="btn btn-outline-primary w-100 mb-2"
            onClick={signupGood}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};




