import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSaleDetailByshoppingId } from "../axios/Purchasedetailaxios";
import { useDispatch, useSelector } from "react-redux";
import { setPurchaseDetails } from "../redux/actions/purchaseActions";
import { FiX, FiShoppingBag, FiInfo } from "react-icons/fi";
import "./showSaleDetail.css";

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
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-card">
          <div className="modal-header">
            <div className="modal-title-section">
              <FiShoppingBag className="modal-icon" />
              <h2 className="modal-title">פרטי קנייה #{shoppingId}</h2>
            </div>
            <button className="close-button" onClick={handleClose}>
              <FiX />
            </button>
          </div>

          <div className="modal-body">
            {saleDetail.length === 0 ? (
              <div className="empty-state">
                <FiInfo className="empty-icon" />
                <p className="empty-message">לא נמצאו פרטי קנייה</p>
              </div>
            ) : (
              <div className="table-container">
                <table className="detail-table">
                  <thead>
                    <tr>
                      <th>מספר פריט</th>
                      <th>קוד רכישה</th>
                      <th>קוד משחק</th>
                      <th>כמות</th>
                    </tr>
                  </thead>
                  <tbody>
                    {saleDetail.map((x, i) => (
                      <tr key={i}>
                        <td className="detail-cell">{x.purchaseDetailsId}</td>
                        <td className="detail-cell">{x.purchaseCode}</td>
                        <td className="detail-cell">{x.gameCode}</td>
                        <td className="detail-cell quantity">{x.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button className="back-button" onClick={handleClose}>
              חזור לאזור האישי
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 


