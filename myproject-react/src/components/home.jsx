import { useEffect, useState } from "react";
import { getReactALlGames } from "../axios/Gameaxios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSal } from "../redux/actions/shoppingActions";
import { FiShoppingCart, FiEye, FiSearch, FiFilter } from "react-icons/fi";
import "./home.css";

export const Home = () => {
    const dispatch = useDispatch();
    const sal = useSelector(state => state.cart.sal);
    
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name");

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getReactALlGames();
                
                // הסרת כפילויות - משאיר רק משחק אחד לכל שם מוצר
                const seen = new Set();
                const uniqueGames = [];
                
                response.data.forEach(game => {
                    const key = game.productName.toLowerCase().trim();
                    if (!seen.has(key)) {
                        seen.add(key);
                        uniqueGames.push(game);
                    }
                });
                
                setList(uniqueGames);
            } catch (error) {
                console.error("Error fetching games:", error);
                setError("נכשל בטעינת המשחקים. אנא נסה שוב מאוחר יותר.");
            } finally {
                setLoading(false);
            }
        };
        
        fetchGames();
    }, []);

    const addToCart = (game) => {
        const existingProduct = sal.find(item => item.gameId === game.gameId);

        if (existingProduct) {
            const updatedSal = sal.map(item => {
                if (item.gameId === game.gameId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        finalPrice: item.price * (item.quantity + 1),
                        picture: game.picture,
                        categoryCode: game.categoryCode,
                    };
                }
                return item;
            });
            dispatch(setSal(updatedSal));
        } else {
            const newProduct = {
                gameId: game.gameId,
                productName: game.productName,
                quantity: 1,
                price: game.price,
                finalPrice: game.price,
                picture: game.picture,
                categoryCode: game.categoryCode,
            };
            dispatch(setSal([...sal, newProduct]));
        }
    };

    // Loading State
    if (loading) {
        return (
            <div className="games-container">
                <div className="loading-container">
                    <div>
                        <div className="loading-spinner"></div>
                        <div className="loading-text">טוען משחקים...</div>
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="games-container">
                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <div className="error-message">{error}</div>
                </div>
            </div>
        );
    }

    // Empty State
    if (list.length === 0) {
        return (
            <div className="games-container">
                <div className="empty-state">
                    <div className="empty-icon">🎮</div>
                    <h2>אין משחקים זמינים</h2>
                    <p>חזור מאוחר יותר למשחקים חדשים!</p>
                </div>
            </div>
        );
    }

    // Filter and sort games - כבר אין כפילויות כי הסרנו אותם ב-useEffect
    const filteredGames = list
        .filter(game => 
            game.productName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === "name") return a.productName.localeCompare(b.productName);
            if (sortBy === "price-low") return a.price - b.price;
            if (sortBy === "price-high") return b.price - a.price;
            return 0;
        });

    return (
        <div className="games-container">
            {/* Search and Filter Controls */}
            <div className="search-filter-container">
                <div className="search-box">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="חפש משחקים..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="filter-box">
                    <FiFilter className="filter-icon" />
                    <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                        className="filter-select"
                    >
                        <option value="name">מיון לפי שם</option>
                        <option value="price-low">מחיר: נמוך לגבוה</option>
                        <option value="price-high">מחיר: גבוה לנמוך</option>
                    </select>
                </div>
            </div>

            {filteredGames.length === 0 && searchTerm && (
                <div className="no-results">
                    <p>לא נמצאו משחקים התואמים ל"{searchTerm}"</p>
                </div>
            )}

            <div className="games-grid">
                {filteredGames.map((game) => (
                    <div className="game-card" key={game.gameId}>
                        <div className="game-image-container">
                            <img 
                                className="game-image" 
                                src={(() => {
                                    if (game.picture.startsWith('img')) {
                                        // מתן יחס לכל התיקיות לפי קטגוריה
                                        if (game.categoryCode === 12) return `/img/board games=6/${game.picture}`;
                                        if (game.categoryCode === 1) return `/img/dolls=3/${game.picture}`;
                                        if (game.categoryCode === 3) return `/img/Bicycle=5/${game.picture}`;
                                        if (game.categoryCode === 4) return `/img/creations=2/${game.picture}`;
                                        if (game.categoryCode === 5) return `/img/doll stroller=4/${game.picture}`;
                                        // ברירת מחדל
                                        return `/img/${game.picture}`;
                                    }
                                    return `https://localhost:7035/${game.picture}`;
                                })()} 
                                alt={game.productName}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/280x200?text=No+Image';
                                }}
                            />
                            <div className="game-overlay"></div>
                            {game.quantityInStock > 0 && (
                                <div className="game-badge">במלאי</div>
                            )}
                            {game.price > 100 && (
                                <div className="game-badge-premium">⭐ פרימיום</div>
                            )}
                        </div>
                        
                        <div className="game-content">
                            <h3 className="game-title">{game.productName}</h3>
                            <div className="game-price">{game.price}₪</div>
                            
                            <div className="game-buttons">
                                <Link 
                                    className="btn-modern btn-secondary" 
                                    to={`/moredetails/${game.gameId}`}
                                >
                                    <FiEye /> פרטים
                                </Link>
                                <button 
                                    className="btn-modern btn-primary" 
                                    onClick={() => addToCart(game)}
                                    disabled={game.quantityInStock === 0}
                                >
                                    <FiShoppingCart /> הוסף
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
