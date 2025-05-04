

//**************אחרי שינוי לרידקס*************** */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SaveCart_Shopping_Axios } from '../axios/Shoppingaxios';
import { saveCart_ShoppingDetails_Axios } from '../axios/Purchasedetailaxios';
import { SaveReactAmount, updateReactGames } from '../axios/Gameaxios';
import { haveThisCustomerReact } from "../axios/Customeraxios";
import { setCustomerId } from "../redux/actions/customerActions"; 
import { clearSal } from "../redux/actions/shoppingActions";

export const Completionpurchase = () => {
  const dispatch = useDispatch();
  
  // שליפת הנתונים מ-Redux
  const Customer = useSelector(state => state.customer.currentCustomer);
  const customerId = useSelector(state => state.customer.customerId);
  const passUser = useSelector(state => state.cart.passUser);
  const Sal = useSelector(state => state.cart.sal);
  
  const myNavigate = useNavigate();

  // פונקציה אסינכרונית - שומרת את נתוני סל הקניות במסד נתונים
  const saveCart = async () => {
    if (Customer === "no counct") {
      alert("לא התחברת מועבר לעמוד התחברות");
      myNavigate("/login"); // ניתוב יזום
    }

    debugger;
    console.log(Customer);
    let y = (await haveThisCustomerReact(Customer, passUser)).data;
    
    if (y !== 0) {
      dispatch(setCustomerId(y)); // שומר את ה-Id ב-Redux
      debugger;
    }

    let shoppingId = (await SaveCart_Shopping_Axios(customerId, Sal)).data; // save buy
    let isShoppingDetails = (await saveCart_ShoppingDetails_Axios(shoppingId, Sal)).data; // save detailed buy

    // if (isShoppingDetails) {
    //   alert("הקניה בוצעה בהצלחה, הנתונים נשמרו במסד הנתונים");
    // } else {
    //   alert("קנייתך נכשלה");
    // }

    if (isShoppingDetails) {
      alert("הקניה בוצעה בהצלחה, הנתונים נשמרו במסד הנתונים");
      dispatch(clearSal()); 
    } else {
      alert("קנייתך נכשלה");
    }


  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        <i className="fas fa-shopping-cart text-primary"></i> Completionpurchase
      </h1>
      <div className="card shadow mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">
            <i className="fas fa-credit-card text-success"></i> Complete Your Purchase
          </h5>
          <form>
            <div className="mb-3">
              {/* <label htmlFor="name" className="form-label">
                <i className="fas fa-user"></i>  Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your  name"
                value={Customer.Name}
              /> */}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <i className="fas fa-envelope"></i> Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
              <button type="button" className="btn btn-primary w-100" onClick={() => saveCart()}>
                <i className="fas fa-paper-plane"></i> Pay Now
              </button>
            </div>
            {/* פרטי אשרי ובדיקות */}
          </form>
        </div>
      </div>
    </div>
  );
};








