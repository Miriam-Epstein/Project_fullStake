import { useEffect, useState } from "react";
import { getGameReactById } from "../axios/Gameaxios";
import { useParams } from "react-router-dom";
import "./moredetailes.css";

export const Moredetailes = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        setLoading(true);
        const response = await getGameReactById(gameId);
        setGame(response.data);
      } catch (error) {
        console.error("Error fetching game:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [gameId]);

  if (loading) {
    return (
      <div className="game-details-container">
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
          <p style={{ marginTop: '1rem', color: '#64748b' }}>טוען פרטי משחק...</p>
        </div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="game-details-container">
        <div className="empty-details">
          <div className="empty-icon">❌</div>
          <h2>משחק לא נמצא</h2>
          <p>לא ניתן לטעון את פרטי המשחק</p>
        </div>
      </div>
    );
  }

  return (
    <div className="game-details-container">
      <div className="game-details-card">
        <img 
          className="game-details-image"
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
            e.target.src = 'https://via.placeholder.com/800x400?text=No+Image';
          }}
        />
        <div className="game-details-content">
          <h1 className="game-details-title">{game.productName}</h1>
          <div className="game-details-price">{game.price}₪</div>
          <div className="game-details-id">מספר משחק: #{game.gameId}</div>
          
          <div className="game-details-info">
            <div className="info-item">
              <div className="info-label">מחיר</div>
              <div className="info-value">{game.price}₪</div>
            </div>
            <div className="info-item">
              <div className="info-label">כמות במלאי</div>
              <div className="info-value">{game.quantityInStock}</div>
            </div>
            <div className="info-item">
              <div className="info-label">קוד קטגוריה</div>
              <div className="info-value">{game.categoryCode}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
