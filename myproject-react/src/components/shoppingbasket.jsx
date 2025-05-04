

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSal,
  setSum,
} from "../redux/actions/shoppingActions"; // פעולה לעדכון סל וקנייה


export const Shoppingbasket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sal = useSelector((state) => state.cart.sal);
  const customer = useSelector((state) => state.customer.currentCustomer);

  const increaseQuantity = (gameId) => {
    const updatedSal = sal.map((item) => {
      if (item.gameId === gameId) {
        const updatedItem = {
          ...item,
          quantity: item.quantity + 1,
          finalPrice: (item.price * (item.quantity + 1)).toFixed(2),
        };
        return updatedItem;
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
        // אם quantity == 1 לא מחזירים כלום (מסירים מהסל)
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    dispatch(setSal(updatedSal));
  };

  const chak = () => {
    if (customer === "no account" || !customer) {
      alert("לא התחברת, מועבר לעמוד התחברות");
      navigate("/login");
    } else {
      navigate("/completionpurchase");
    }
  };

  return (
    <div className="container mt-6">
      <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>Shopping Basket</h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          <i className="fas fa-shopping-cart text-primary"></i> Your Sal
        </h2>
        {sal.length !== 0 && (
          <button className="btn btn-success" onClick={chak}>
            <i className="fas fa-credit-card"></i> Complete Purchase
          </button>
        )}
      </div>

      <table className="table table-bordered table-striped text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <thead className="thead-light">
          <tr>
            <th scope="col">gameId</th>
            <th scope="col">productName</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">finalPrice</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {sal.map((x) => (
            <tr key={x.gameId}>
              <td>{x.gameId}</td>
              <td>{x.productName}</td>
              <td>{parseFloat(x.price).toFixed(2)}₪</td>
              <td>{x.quantity}</td>
              <td>{parseFloat(x.finalPrice).toFixed(2)}₪</td>
              <td>
                <button
                  className="btn btn-success m-1"
                  onClick={() => increaseQuantity(x.gameId)}
                  style={{ borderRadius: '5px' }}
                >
                  +
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => decreaseQuantity(x.gameId)}
                  style={{ borderRadius: '5px' }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {sal.length === 0 && (
        <div className="text-center text-muted py-5">
          <h4>Your Sal is empty.</h4>
        </div>
      )}
    </div>
  );
};






