

    //********אחרי החלפה לרידקס****************** */               

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSaleDetailByshoppingId } from "../axios/Purchasedetailaxios";
import { setPurchaseDetails } from "../redux/actions/purchaseActions";

export const ShowSaleDetail = () => {
  const myParams = useParams();
  const dispatch = useDispatch();

  const saleDetail = useSelector((state) => state.purchase.purchaseDetails);

  useEffect(() => {
    loadDetails();
  }, [myParams.shoppingId]);

  const loadDetails = async () => {
    const res = await getSaleDetailByshoppingId(myParams.shoppingId);
    dispatch(setPurchaseDetails(res.data));
  };

  let url = "https://localhost:7035/";

  return (
    <div>
      <h1>ShowSaleDetail</h1>
      <table className="table">
        <thead>
          <tr>
            <th>saleCode</th>
            <th>buyId</th>
            <th>gameId</th>
            <th>gameName</th>
            <th>gamePrice</th>
            <th>saleAmount</th>
            <th>totalPrice</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {saleDetail.map((x, i) => (
            <tr key={i}>
              <td>{x.saleCode}</td>
              <td>{x.buyId}</td>
              <td>{x.gameId}</td>
              <td>{x.gameName}</td>
              <td>{x.gamePrice}</td>
              <td>{x.saleAmount}</td>
              <td>{x.gamePrice * x.saleAmount}</td>
              {/* <td><img style={{ width: '20px'}} src={`${url}/${x.gameImg}.jpg`} /></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
