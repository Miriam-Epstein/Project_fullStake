

/****************ניסיון שינוי הוספת משחק לצורה יותר תקינה***** */


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReactGames } from "../axios/Gameaxios";
import { addGameAction } from "../redux/actions/gameActions";
import { useNavigate } from "react-router-dom";

export const Addgame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setitem] = useState({
    productName: "",
    categoryCode: 0,
    price: 0,
    picture: "",
    quantityInStock: 0,
  });

  const addGood = async () => {
    let res = await addReactGames(item);
    if (res.data) {
      dispatch(addGameAction(res.data));
      alert("המשחק נוסף בהצלחה");
      navigate("/games");
    } else {
      alert("נכשלת בהוספה");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="שם משחק חדש"
        onBlur={(e) => setitem({ ...item, productName: e.target.value })}
      />
      <input
        type="number"
        placeholder="קוד קטגוריה"
        onBlur={(e) => setitem({ ...item, categoryCode: +e.target.value })}
      />
      <input
        type="number"
        step="0.01"
        placeholder='מחיר'
        onBlur={(e) => setitem({ ...item, price: +e.target.value })}
      />
      <input
        type="text"
        placeholder="כתובת תמונה"
        list="pictures"
        onBlur={(e) => setitem({ ...item, picture: e.target.value })}
      />
      
      <input
        type="number"
        placeholder="כתובת במלאי"
        onBlur={(e) => setitem({ ...item, quantityInStock: +e.target.value })}
      />
      <br />
      <button className="btn btn-primary" onClick={addGood}>
        הוסף משחק
      </button>
    </div>
  );
};
























