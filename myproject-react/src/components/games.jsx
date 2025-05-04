
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReactALlGames, deleteReactGames } from "../axios/Gameaxios";
import { setGamesAction, deleteGameAction } from "../redux/actions/gameActions";
import { Link, Outlet } from "react-router-dom";

export const Games = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);

  useEffect(() => {
    const fetchGames = async () => {
      // if (games.length === 0) {
        let res = await getReactALlGames();
        if (res.data) {
          dispatch(setGamesAction(res.data));
        }
      // }
    };
    fetchGames();
  }, [dispatch, games.length]);

  const f1 = async (gameId) => {
    let success = await deleteReactGames(gameId);
    if (success) {
      dispatch(deleteGameAction(gameId));
      alert("הצלחת");
    } else {
      alert("נכשלת");
    }
  };

  return (
    <>
      <div className="container mt-6">
        <table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>קוד משחק</th>
              <th>שם משחק</th>
              <th>מחיר</th>
              <th>כמות</th>
              <th>קוד קטגוריה</th>
              <th>תמונה</th>
              <th>שם קטגוריה</th>
              <th>אפשריות נוספות</th>
            </tr>
          </thead>
          <tbody>
            {games.map((x) => (
              <tr key={x.gameId}>
                <td>{x.gameId}</td>
                <td>{x.productName}</td>
                <td>{x.price}₪</td>
                <td>{x.quantityInStock}</td>
                <td>{x.categoryCode}</td>
                <td><img width={'50px'} height={'50px'} src={`https://localhost:7035/${x.picture}`} alt="" /></td>
                <td>{x.categoryName}</td>
                <td>
                  <button onClick={() => f1(x.gameId)}>מחק</button>{" "}
                  <Link to={`/games/updategame/${x.gameId}`}>עדכון</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className="btn btn-outline-dark" to={`/games/addgame`}>הוספת משחק</Link>
      <Outlet />
    </>
  );
};

















