//----------פרטי הקניה לא עובד לפני עזרה מGBT----------------

// import { useContext, useEffect, useState } from "react"
// import MyContex from "../contex"
// import { haveThisCustomerReact } from "../axios/Customeraxios"
// import { GetBuys } from "../axios/Shoppingaxios"
// import { Link, Outlet } from "react-router-dom"

// export const Personalarea =()=>{

//     const passUser=useContext(MyContex).passUser
//     const curentUser=useContext(MyContex).currentCustomer

//     useEffect(()=>{
//         doSomething()      
//     },[])

//     const[Buys,setBuys]=useState([
//         {
//             "shoppingId": 0,
//             "customerCode": 0,
//             "date": "2023-01-01T00:00:00",
//             "amount": 0
//         }
//     ])

//     const doSomething=async()=>{
//         //let g
//      let custId=(await haveThisCustomerReact(curentUser,passUser)).data
//      let y=(await GetBuys(custId)).data
//     if(y!==null)
//         {
//             setBuys(y)
//         }
//     }

//     return <div>
//         <table className="table" style={{textAlign:"center"}}>
//             <thead>
//                 <tr>
//                     <th>ShoppingId</th>
//                     <th> CustomerCode</th>
//                     <th> Date</th>
//                     <th>Amount</th>
//                     <th>more information</th>
//                 </tr>
//             </thead>
//             <tbody>
//                  {Buys.map((x,i)=><tr key={i}>
//                     <td>{x.shoppingId}</td><td>{x.customerCode}</td><td>{x.date}</td><td>{x.amount}</td>
//                 {/* <td><Link to={`/personal/showSaleDetail/${x.shoppingId}`} className="btn btn-outline-dark mb-2">Information</Link></td> */}
//                 <td><Link to={`/personalarea/showSaleDetaildWind/${x.shoppingId}`} className="btn btn-outline-dark mb-2">Information</Link></td>

//                  </tr>
//                 )}
//             </tbody>
//         </table>
// <Outlet></Outlet>

//     </div>
// }
    


//---------------------------אחרי טיפול מספר---1--------------------

import { useContext, useEffect, useState } from "react";
import MyContex from "../contex";
import { haveThisCustomerReact } from "../axios/Customeraxios";
import { GetBuys } from "../axios/Shoppingaxios";
import { Link, Outlet } from "react-router-dom";

export const Personalarea = () => {
  const passUser = useContext(MyContex).passUser
  const setpassUser = useContext(MyContex).setpassUser;

  const currentUser = useContext(MyContex).currentCustomer;
  const setcurrentUser = useContext(MyContex).setcurrentCustomer;
  const customerId = useContext(MyContex).customerId;
  const setCustomerId = useContext(MyContex).setcustomerId;
  const [buys, setBuys] = useState([]);
   
   debugger
   console.log(passUser)
   console.log(currentUser)

  useEffect(() => {
    doSomething();
  }, []);

  const doSomething = async () => {
    try {
        
      const custIdResponse = await haveThisCustomerReact(currentUser, passUser);// מחזיר את האידי של הלקוח 
      const custId = custIdResponse.data;// שליפת האידי של הלקוח מהנתונים
      const buysResponse = await GetBuys(custId);//הטבלת קניות שחוזרת לפי קוד לקוח
    
      console.log(custIdResponse)
     console.log(custId)
     console.log(buysResponse)

      if (buysResponse.data) {
        setBuys(buysResponse.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>אזור אישי</h2>
      <table className="table" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>ShoppingId</th>
            <th>CustomerCode</th>
            <th>Date</th>
            <th>Amount</th>
            <th>More Information</th>
          </tr>
        </thead>
        <tbody>
          {buys.map((x, i) => (
            <tr key={i}>
              <td>{x.shoppingId}</td>
              <td>{x.customerCode}</td>
              <td>{x.date}</td>
              <td>{x.amount}</td>
              <td>
                <Link
                  to={`/personalarea/showSaleDetaildWind/${x.shoppingId}`}
                  className="btn btn-outline-dark mb-2"
                >
                  Information
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};




   