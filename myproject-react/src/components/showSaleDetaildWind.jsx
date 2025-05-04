
 //******אחרי עיצוב בוסטרפ*********** */

 import { useEffect } from "react";
 import { useNavigate, useParams } from "react-router-dom";
 import { getSaleDetailByshoppingId } from "../axios/Purchasedetailaxios";
 import { useDispatch, useSelector } from "react-redux";
 import { setPurchaseDetails } from "../redux/actions/purchaseActions";
 
 export const ShowSaleDetaildWind = () => {
   const { shoppingId } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const saleDetail = useSelector((state) => state.purchase.purchaseDetails);
 
   useEffect(() => {
     loadDetails();
   }, [shoppingId]);
 
   const loadDetails = async () => {
     try {
       const res = await getSaleDetailByshoppingId(shoppingId);
       dispatch(setPurchaseDetails(res.data));
     } catch (error) {
       console.error("שגיאה בקריאה ל-API:", error);
     }
   };
 
   const handleClose = () => {
     navigate("/personalarea");
   };
 
   return (
     <div
       className="modal show d-block"
       tabIndex="-1"
       style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
     >
       <div className="modal-dialog modal-lg modal-dialog-centered">
         <div className="modal-content shadow">
           <div className="modal-header bg-primary text-white">
             <h5 className="modal-title">
               <i className="fas fa-info-circle me-2"></i>פרטי קנייה
             </h5>
             <button
               type="button"
               className="btn-close"
               onClick={handleClose}
               aria-label="Close"
             ></button>
           </div>
 
           <div className="modal-body">
             <div className="table-responsive">
               <table className="table table-bordered table-hover text-center align-middle">
                 <thead className="table-light">
                   <tr>
                     <th>מספר פריט</th>
                     <th>קוד רכישה</th>
                     <th>קוד משחק</th>
                     <th>כמות</th>
                   </tr>
                 </thead>
                 <tbody>
                   {saleDetail.length === 0 ? (
                     <tr>
                       <td colSpan="4" className="text-muted">
                         לא נמצאו פרטי קנייה.
                       </td>
                     </tr>
                   ) : (
                     saleDetail.map((x, i) => (
                       <tr key={i}>
                         <td>{x.purchaseDetailsId}</td>
                         <td>{x.purchaseCode}</td>
                         <td>{x.gameCode}</td>
                         <td>{x.quantity}</td>
                       </tr>
                     ))
                   )}
                 </tbody>
               </table>
             </div>
           </div>
 
           <div className="modal-footer">
             <button
               type="button"
               className="btn btn-outline-secondary"
               onClick={handleClose}
             >
               <i className="fas fa-arrow-right me-1"></i>חזור לאזור האישי
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };
 


