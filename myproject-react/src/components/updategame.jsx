
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateReactGames, getGameReactById } from "../axios/Gameaxios";
import { updateGameAction } from "../redux/actions/gameActions";

export const Updategame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gameId } = useParams();

  const gameFromRedux = useSelector(state =>
    state.game.games.find(g => g.gameId === +gameId)
  );

  const [item, setitem] = useState({
    gameId: 0,
    productName: "",
    categoryCode: 0,
    price: 0,
    picture: "",
    quantityInStock: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (gameFromRedux) {
        setitem(gameFromRedux);
      } else {
        let res = await getGameReactById(gameId);
        if (res.data) {
          setitem(res.data);
        }
      }
    };
    fetchData();
  }, [gameFromRedux, gameId]);

  const updateGood = async () => {
    let res = await updateReactGames(item.gameId, item);
    if (res.data) {
      dispatch(updateGameAction(res.data));
      alert("עודכן בהצלחה");
       navigate("/games");
    } else {
      alert("לא הצליח לעדכן");
    }
    navigate("/games");
  };

  return (
    <div>
      <input type="text" placeholder="productName"
        value={item.productName}
        onChange={(e) => setitem({ ...item, productName: e.target.value })}
      />
      <input type="number" placeholder="categoryCode"
        value={item.categoryCode}
        onChange={(e) => setitem({ ...item, categoryCode: +e.target.value })}
      />
      <input type="number" placeholder="price"
        value={item.price}
        onChange={(e) => setitem({ ...item, price: +e.target.value })}
      />
      <input type="text" placeholder="picture"
        value={item.picture}
        onChange={(e) => setitem({ ...item, picture: e.target.value })}
      />
      <input type="number" placeholder="quantityInStock"
        value={item.quantityInStock}
        onChange={(e) => setitem({ ...item, quantityInStock: +e.target.value })}
      />
      <br />
      <button className="btn btn-primary" onClick={updateGood}>עדכן משחק</button>
    </div>
  );
};









