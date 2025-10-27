import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReactALlGames, deleteReactGames } from "../axios/Gameaxios";
import { setGamesAction, deleteGameAction } from "../redux/actions/gameActions";
import { Link, Outlet } from "react-router-dom";
import { FiTrash2, FiEdit, FiPlus } from "react-icons/fi";
import "./games.css";

export const Games = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);

  useEffect(() => {
    const fetchGames = async () => {
      let res = await getReactALlGames();
      if (res.data) {
        dispatch(setGamesAction(res.data));
      }
    };
    fetchGames();
  }, [dispatch, games.length]);

  const deleteGame = async (gameId) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק את המשחק הזה?")) {
      let success = await deleteReactGames(gameId);
      if (success) {
        dispatch(deleteGameAction(gameId));
        alert("המשחק נמחק בהצלחה");
      } else {
        alert("מחיקת המשחק נכשלה");
      }
    }
  };

  return (
    <div className="games-management-container">
      <div className="games-management-header">
        <h1 className="games-management-title">🎮 ניהול משחקים</h1>
        <p className="games-management-subtitle">ניהול כל המשחקים במערכת</p>
      </div>

      <Link className="add-game-button" to="/games/addgame">
        <FiPlus /> הוסף משחק חדש
      </Link>

      <div className="games-table-container">
        <table className="games-table">
          <thead>
            <tr>
              <th>קוד משחק</th>
              <th>שם משחק</th>
              <th>מחיר</th>
              <th>כמות במלאי</th>
              <th>קוד קטגוריה</th>
              <th>תמונה</th>
              <th>שם קטגוריה</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.gameId}>
                <td className="game-id">#{game.gameId}</td>
                <td>{game.productName}</td>
                <td className="game-price">{game.price}₪</td>
                <td className="game-quantity">{game.quantityInStock}</td>
                <td>{game.categoryCode}</td>
                <td className="game-image-cell">
                  <img 
                    width="50px" 
                    height="50px" 
                    src={(() => {
                      if (game.picture.startsWith('img')) {
                        if (game.categoryCode === 12) return `/img/board games=6/${game.picture}`;
                        if (game.categoryCode === 1) return `/img/dolls=3/${game.picture}`;
                        if (game.categoryCode === 3) return `/img/Bicycle=5/${game.picture}`;
                        if (game.categoryCode === 4) return `/img/creations=2/${game.picture}`;
                        if (game.categoryCode === 5) return `/img/doll stroller=4/${game.picture}`;
                        return `/img/${game.picture}`;
                      }
                      return `https://localhost:7035/${game.picture}`;
                    })()} 
                    alt={game.productName}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/50x50?text=No+Image';
                    }}
                  />
                </td>
                <td>{game.categoryName}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="action-button delete-button"
                      onClick={() => deleteGame(game.gameId)}
                      title="מחק"
                    >
                      <FiTrash2 />
                    </button>
                    <Link 
                      className="action-button update-button"
                      to={`/games/updategame/${game.gameId}`}
                      title="עדכון"
                    >
                      <FiEdit />
                    </Link>
                  </div>
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
