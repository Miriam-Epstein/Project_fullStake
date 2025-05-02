

import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContex from "../contex";
import { SaveCart_Shopping_Axios } from '../axios/Shoppingaxios';
import { saveCart_ShoppingDetails_Axios } from '../axios/Purchasedetailaxios';
import { SaveReactAmount, updateReactGames } from '../axios/Gameaxios';
import { haveThisCustomerReact } from "../axios/Customeraxios";

   export  const Completionpurchase = () => {


    const [customer, setcustomer] = useState();//שעור את מצב לקוח משתנה גלובלי 


   const Customer = useContext(MyContex).currentCustomer;
   const customerId = useContext(MyContex).customerId;
   const setcustomerId = useContext(MyContex).setcustomerId;
   const Sal = useContext(MyContex).sal;
     //שליפת סיסמת לקוח
     const passUser =useContext(MyContex).passUser
     const  setpassUser =useContext(MyContex).setpassUser 
   // navigate משתנה
  const myNavigate = useNavigate();


  // פונקציה אסינכרונית - שומרת את נתוני סל הקניות במסד נתונים
  const saveCart = async () => {

        if(Customer == "no counct")
         {
        alert("לא התחברת מועבר לעמוד התחברות")
        myNavigate("/login")   //ניתוב יזום
        }
        
    debugger
    console.log(Customer)
    let y=(await haveThisCustomerReact(Customer,passUser)).data
    if (y != 0) {
      setcustomerId(y);
      debugger
    }
      let shoppingId = (await SaveCart_Shopping_Axios(customerId, Sal)).data;//save buy
      let isShoppingDetails = (await saveCart_ShoppingDetails_Axios(shoppingId, Sal)).data;//save detaild buy
      if (isShoppingDetails )
      {
        alert("הקניה בוצעה בהצלחה, הנתונים נשמרו במסד הנתונים" );
      }
      else
      alert("קנייתך נכשלה" )
    
  
  
  }

  

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
                        {/* פרטי אשרי ובדיקות      */}
           
          </form>
        </div>
      </div>
    </div>
  );
};











////-----------------בשביל פרטי אשרי---------
// משתנה שמפרק את מידע על האשראי
// const [creditInformation, setCreditInformation] = useState({
//   CardNumber: "1",
//   ExpiryDate: "2",
//   CVV: "3"
// });
////שימוש בפונקציה של בדיקת אשרי
{/* 
<div className="mb-3">
<label htmlFor="cardNumber" className="form-label">
  <i className="fas fa-credit-card"></i> Card Number
</label>
<input
  type="text"
  className="form-control"
  id="cardNumber"
  placeholder="1234 5678 9012 3456"
  value={Customer.creditInformation.split(" ")[0]}
/>
</div>
<div className="row">
<div className="col-md-6 mb-3">
  <label htmlFor="expiryDate" className="form-label">
    <i className="fas fa-calendar-alt"></i> Expiry Date
  </label>
  <input
    type="month"
    className="form-control"
    id="expiryDate"
    value={Customer.creditInformation.split(" ")[1]}
     </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cvv" className="form-label">
                  <i className="fas fa-lock"></i> CVV
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cvv"
                  placeholder="123"
                  value={Customer.creditInformation.split(" ")[2]}
                />
              </div>
            </div>
  /> */}



   


