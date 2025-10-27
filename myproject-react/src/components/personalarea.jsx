import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { haveThisCustomerReact } from "../axios/Customeraxios";
import { GetBuys } from "../axios/Shoppingaxios";
import { Link, Outlet } from "react-router-dom";
import { FiShoppingBag, FiCalendar, FiDollarSign, FiInfo } from "react-icons/fi";
import "./personalarea.css";

export const Personalarea = () => {
  const currentUser = useSelector((state) => state.customer.currentCustomer);
  const passUser = useSelector((state) => state.customer.passUser);
  
  const [buys, setBuys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    doSomething();
  }, []);

  const doSomething = async () => {
    try {
      setLoading(true);
      const custIdResponse = await haveThisCustomerReact(currentUser, passUser);
      const custId = custIdResponse.data;
      const buysResponse = await GetBuys(custId);

      if (buysResponse.data) {
        setBuys(buysResponse.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="personal-area-container">
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <div className="loading-spinner" style={{ 
            width: '50px', 
            height: '50px', 
            border: '4px solid #e2e8f0', 
            borderTopColor: '#6366f1', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '1rem', color: '#64748b' }}>טוען את הרכישות שלך...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="personal-area-container">
      <div className="personal-area-header">
        <h1 className="personal-area-title">👤 אזור אישי</h1>
        <p className="personal-area-subtitle">ברוך הבא, {currentUser}!</p>
      </div>

      {buys.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h2 className="empty-title">עדיין אין רכישות</h2>
          <p className="empty-message">התחל לקנות כדי לראות את הרכישות שלך כאן!</p>
        </div>
      ) : (
        <div className="purchases-card">
          <div className="purchases-header">
            <FiShoppingBag className="purchases-icon" />
            <span className="purchases-title">הרכישות שלך</span>
          </div>

          <div className="purchases-grid">
            {buys.map((x, i) => (
              <div className="purchase-card" key={i}>
                <div className="purchase-card-header">
                  <div className="purchase-icon-wrapper">
                    <FiShoppingBag className="purchase-card-icon" />
                  </div>
                  <div className="purchase-info">
                    <span className="purchase-id">רכישה #{x.shoppingId}</span>
                    <span className="purchase-date-small">{x.date}</span>
                  </div>
                </div>
                
                <div className="purchase-card-body">
                  <div className="purchase-detail-row">
                    <span className="detail-label">לקוח:</span>
                    <span className="detail-value">{x.customerCode}</span>
                  </div>
                  <div className="purchase-detail-row">
                    <span className="detail-label">תאריך:</span>
                    <span className="detail-value">{x.date}</span>
                  </div>
                  <div className="purchase-total-row">
                    <span className="total-label">סכום:</span>
                    <span className="total-value">{x.amount}₪</span>
                  </div>
                </div>

                <div className="purchase-card-footer">
                  <Link
                    to={`/personalarea/showSaleDetaildWind/${x.shoppingId}`}
                    className="details-button"
                  >
                    <FiInfo /> צפה בפרטים
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};
