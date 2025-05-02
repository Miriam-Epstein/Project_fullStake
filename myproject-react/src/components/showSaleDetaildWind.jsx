


//----------פרטי הקניה לא עובד לפני עזרה מGBT----------------
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom"
// import { GetSaleDetailByCustId, getSaleDetailByshoppingId } from "../axios/Purchasedetailaxios";

// export const ShowSaleDetaildWind=()=>{
//     debugger
//     let myParams=useParams();

//     // const[Buys,setBuys]=useState([
//     //     {
//     //         "shoppingId": 0,
//     //         "customerCode": 0,
//     //         "date": "2023-01-01T00:00:00",
//     //         "amount": 0
//     //     }
//     // ])
   

// let navigate=useNavigate()

//     let[SaleDetail,setSaleDetail]=useState([])
//     useEffect(()=>{
//         debugger
//         doSomthing()
//     },[myParams.shoppingId])
    
    
//     const doSomthing=async()=>{
//         // if(SaleDetail.length===0)
//         // {
//             let y=(await getSaleDetailByshoppingId(myParams.shoppingId)).data
//             console.log("y hhhh",y)
//             setSaleDetail(y)

//         // }        
//         // if(y!==null)
//         // else
//         // console.log("לא הצליח")
//     }
//         // פונקציה לסגירת החלון
//         const handleClose = () => {
//             navigate("/personalarea");
//         };
//         let url="https://localhost:7035/";

//  return <div style={{
//     position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
//     justifyContent: 'center', alignItems: 'center', zIndex: '1000'
// }}>
//      <div style={{
//                     backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '900px'
//                 }}>
//       <table className="table">
//                 <thead>
//                     <tr>
//                         <th>saleCode</th>
//                         <th>shoppingId</th>
//                         <th>gameId</th>
//                         <th>productName</th>
//                         <th>price</th>
//                         <th>quantity</th>
//                         <th>totsalEmount</th>
//                         <th>img</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                      {SaleDetail.map((x,i)=><tr key={i}>
//                         <td>{x.saleCode}</td><td>{x.shoppingId}</td><td>{x.gameId}</td><td>{x.productName}</td><td>{x.price}</td><td>{x.quantity}</td><td>{x.price*x.quantity}</td>
                      
//                         {/*  -- כרגע אין לי תמונה בסל קניות
//                         <td><img style={{ width: 'auto',height:'100px'}} src={`https://localhost:7035/${x.gameImg}.jpg`}/>
//                         </td> */}
                        
//                         {/* <td>{`${url}/${x.gameImg}.jpg`}</td> */}

                        
//                      </tr>
//                     )}
//                 </tbody>
//             </table>
//             <button onClick={handleClose} style={{ marginTop: '20px' }} className="btn btn-outline-dark">חזור</button>

//  </div>  
//  </div> 
// }

//---------------------------אחרי טיפול מספר---1--------------------
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSaleDetailByshoppingId } from "../axios/Purchasedetailaxios";


export const ShowSaleDetaildWind = () => {
    
  const myParams = useParams();
  const navigate = useNavigate();
  
  const [saleDetail, setSaleDetail] = useState([]);

  useEffect(() => {
    doSomthing();
  }, [myParams.shoppingId]);

  const doSomthing = async () => {
    try {
      const response = await getSaleDetailByshoppingId(myParams.shoppingId);
      if (response.data) {
        setSaleDetail(response.data);
      } else {
        console.log("לא הצליח לקבל את פרטי הקנייה");
      }
    } catch (error) {
      console.error("שגיאה בקריאה ל-API:", error);
    }
  };

  const handleClose = () => {
    navigate("/personalarea");
  };

  const url = "https://localhost:7035";

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "900px",
          overflowY: "auto",
        }}
      >
        <h3>פרטי קנייה</h3>
        <table className="table">
          <thead>
            <tr>       
              <td>purchaseDetailsId</td>
              <td>purchaseCode</td>
              <td>gameCode</td>
              <td>quantity</td>
            </tr>
          </thead>
          <tbody>
            {saleDetail.map((x, i) => (
              <tr key={i}>
                {/* <td>{x.saleCode}</td> */}
                <td>{x.purchaseDetailsId}</td>
                <td>{x.purchaseCode}</td>
                <td>{x.gameCode}</td>
                <td>{x.quantity}</td>  
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleClose}
          style={{ marginTop: "20px" }}
          className="btn btn-outline-dark"
        >
          חזור
        </button>
      </div>
    </div>
  );
};





  {/*  //--------------בשביל הצגת תמונה----------
    <td>
                  {x.gameImg ? (
                    <img
                      style={{ width: "100px", height: "auto" }}
                      src={`${url}${x.gameImg}.jpg`}
                      alt="Product"
                    />
                  ) : (
                    <span>אין תמונה</span>
                  )}
                </td> */}