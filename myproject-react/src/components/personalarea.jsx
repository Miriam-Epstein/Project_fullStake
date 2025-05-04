
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { haveThisCustomerReact } from "../axios/Customeraxios";
import { GetBuys } from "../axios/Shoppingaxios";
import { Link, Outlet } from "react-router-dom";

export const Personalarea = () => {
  const currentUser = useSelector((state) => state.customer.currentCustomer);
  const passUser = useSelector((state) => state.customer.passUser);
  
  const [buys, setBuys] = useState([]);
  useEffect(() => {
    doSomething();
  }, []);

 

  const doSomething = async () => {
    try {
      const custIdResponse = await haveThisCustomerReact(currentUser, passUser);
      const custId = custIdResponse.data;
      const buysResponse = await GetBuys(custId);

      if (buysResponse.data) {
        setBuys(buysResponse.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-5">
      {/* כותרת עם הסבר נעים ומזמין */}
      <h2 className="text-center mb-4 text-primary">!ברוך הבא לאזור האישי שלך</h2>
      <p className="text-center mb-4">כאן תוכל למצוא את כל הקניות שביצעת  ולראות פרטים נוספים </p>
      
      {/* טבלה עם עיצוב מודרני */}
      <div className="table-responsive shadow-lg rounded-3 p-3 bg-light">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
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
                    className="btn btn-outline-primary"
                  >
                    מידע נוסף
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Outlet />
    </div>
  );
};
