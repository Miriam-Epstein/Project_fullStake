import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSal, setSum } from "../redux/actions/shoppingActions";
import { FiShoppingCart, FiPlus, FiMinus, FiCheckCircle } from "react-icons/fi";
import "./shoppingbasket.css";

export const Shoppingbasket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sal = useSelector((state) => state.cart.sal);
  const customer = useSelector((state) => state.customer.currentCustomer);

  const increaseQuantity = (gameId) => {
    const updatedSal = sal.map((item) => {
      if (item.gameId === gameId) {
        return {
          ...item,
          quantity: item.quantity + 1,
          finalPrice: (item.price * (item.quantity + 1)).toFixed(2),
        };
      }
      return item;
    });
    dispatch(setSal(updatedSal));
  };

  const decreaseQuantity = (gameId) => {
    const updatedSal = sal.reduce((acc, item) => {
      if (item.gameId === gameId) {
        if (item.quantity > 1) {
          const updatedItem = {
            ...item,
            quantity: item.quantity - 1,
            finalPrice: (item.price * (item.quantity - 1)).toFixed(2),
          };
          acc.push(updatedItem);
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    dispatch(setSal(updatedSal));
  };

  const calculateTotal = () => {
    return sal.reduce((total, item) => total + parseFloat(item.finalPrice), 0).toFixed(2);
  };

  const handleCheckout = () => {
    if (customer === "לא מחובר" || !customer) {
      alert("לא התחברת, מועבר לעמוד התחברות");
      navigate("/login");
    } else {
      dispatch(setSum(calculateTotal()));
      navigate("/completionpurchase");
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">🛒 עגלת קניות</h1>
        <p className="cart-subtitle">בדוק את הפריטים שלך</p>
      </div>

      {sal.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2 className="empty-cart-title">העגלה שלך ריקה</h2>
          <p className="empty-cart-message">הוסף משחקים כדי להתחיל!</p>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <div className="total-info">
              <span className="total-label">סה"כ:</span>
              <span className="total-amount">{calculateTotal()}₪</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              <FiCheckCircle /> השלם רכישה
            </button>
          </div>

          <div className="cart-items">
            {sal.map((item) => (
              <div className="cart-item" key={item.gameId}>
                <div className="item-image-container">
                  <img 
                    className="item-image"
                    src={(() => {
                      if (item.picture && item.picture.startsWith('img')) {
                        if (item.categoryCode === 12) return `/img/board games=6/${item.picture}`;
                        if (item.categoryCode === 1) return `/img/dolls=3/${item.picture}`;
                        if (item.categoryCode === 3) return `/img/Bicycle=5/${item.picture}`;
                        if (item.categoryCode === 4) return `/img/creations=2/${item.picture}`;
                        if (item.categoryCode === 5) return `/img/doll stroller=4/${item.picture}`;
                        return `/img/${item.picture}`;
                      }
                      return item.picture ? `https://localhost:7035/${item.picture}` : 'https://via.placeholder.com/80x80?text=No+Image';
                    })()} 
                    alt={item.productName}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
                    }}
                  />
                </div>
                <div className="item-details">
                  <div className="item-id">#{item.gameId}</div>
                  <div className="item-name">{item.productName}</div>
                  <div className="item-price">{parseFloat(item.price).toFixed(2)}₪</div>
                </div>
                
                <div className="quantity-controls">
                  <button
                    className="quantity-btn decrease"
                    onClick={() => decreaseQuantity(item.gameId)}
                  >
                    <FiMinus />
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    className="quantity-btn increase"
                    onClick={() => increaseQuantity(item.gameId)}
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="final-price">{parseFloat(item.finalPrice).toFixed(2)}₪</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
