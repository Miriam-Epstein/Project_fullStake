import { useContext, useState } from "react"
import {addCustomerReact} from "../axios/Customeraxios";
import MyContex from "../contex";

export const Signup=()=>{
    //קומפננטה הרשמה לאתר 
  //*********************************************** 
  //----------לשים לב חשוב מאוד כאשר  נרשמים לאתר לא ממלאים את הקוד אידי זה אוטמטי--------
  //***********************************************
   


   const currentCustomer = useContext(MyContex).currentCustomer;
   const setCurrentCustomer = useContext(MyContex).setcurrentCustomer;
     //הנתונים שצריך בשביל לקוח
     const[use,setuse]=useState({
        "customerId": 0,
        "name": "string",
        "password": "string",
        "creditInfo": "string"
     })







    const signupGood=async()=>{
    if( use.name== ""||use.passworda==""||use.creditInfo=="")
         {  
        alert("לא הוכנס תקין הכנס שוב")
          }
        else
        {

            let y=(await addCustomerReact(use)).data
            if(y)
            {
                alert("שלום וברכה נרשמת בהצלחה")
            }
              else
                  alert(" נכשל לא הצליח להרשם")

        }
    }


    return (
        <div className="container d-flex justify-content-center mt-5">
          <div className="card shadow" style={{ width: "400px" }}>
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign Up</h3>
              <div className="mb-3">
             
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="custName">
                  Customer Name
                </label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter customer name"
                  onBlur={(e) => setuse({ ...use, name: e.target.value })}
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
                  onBlur={(e) => setuse({ ...use, password: e.target.value })}
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
                  onBlur={(e) => setuse({ ...use, creditInfo: e.target.value })}
                />
              </div>
              <button
                // className="btn btn-dark w-100"
                 // className="btn btn-outline-success w-100"
                    className="btn btn-outline-primary w-100 mb-2"
                onClick={() => signupGood()}
              >
                Sign Up
              </button>
              <div>

              </div>
            </div>
          </div>
        </div>
      );




         {/* ---------הסנסת קוד לקוח------------
          <label className="form-label" htmlFor="custId">
                  Customer ID
                </label> */}
                {/* <input
                  id="custId"
                  className="form-control"
                  type="number"
                  placeholder="Enter customer ID"
                  onBlur={(e) => setuse({ ...use, custId: e.target.value })}
                /> */}
    
    
 

    


}

//תצוגה רישום לאתר יום חמישי בלילה
// return <div>
//     <input className="form-control" type={'text'}placeholder={'name'}onBlur={(e)=>setuse({...use,name:e.target.value})}></input>
//     <br></br>
//     <input className="form-control" type={'text'}placeholder={'password'}onBlur={(e)=>setuse({...use,password:e.target.value})}></input>
//     <br></br>
//     <input className="form-control" type={'text'}placeholder={'creditInfo'}onBlur={(e)=>setuse({...use,creditInfo:e.target.value})}></input>
//     <br></br>
//     <br></br>
//     <button  className="btn btn-dark" onClick={()=>signupGood()}>send_signupGood</button>
// </div>