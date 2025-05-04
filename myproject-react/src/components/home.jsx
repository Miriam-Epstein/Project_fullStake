
/*********************אחרי שהחלפתי לרידקס******** */

import { useEffect, useState } from "react";
import { getReactALlGames } from "../axios/Gameaxios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSal } from "../redux/actions/shoppingActions"; // ודא שזה נתיב נכון

export const Home = () => {
    const dispatch = useDispatch();
    const sal = useSelector(state => state.cart.sal); // שליפת הסל מהסטייט

    
    const [list, setlist] = useState([]);

    useEffect(() => {
        const doSomething = async () => {
            if (list.length === 0) {
                try {
                    const response = await getReactALlGames();
                    setlist(response.data);
                } catch (error) {
                    console.error("Error fetching games:", error);
                }
            }
        };
        doSomething();
    }, [list]);

    const f1 = (g) => {
        const existingProduct = sal.find(item => item.gameId === g.gameId);

        if (existingProduct) {
            const updatedSal = sal.map(item => {
                if (item.gameId === g.gameId) {
                    const updatedItem = {
                        ...item,
                        quantity: item.quantity + 1,
                        finalPrice: item.price * (item.quantity + 1)
                    };
                    return updatedItem;
                }
                return item;
            });
            dispatch(setSal(updatedSal));
        } else {
            const newProduct = {
                gameId: g.gameId,
                productName: g.productName,
                quantity: 1,
                price: g.price,
                finalPrice: g.price,
            };
            dispatch(setSal([...sal, newProduct]));
        }
    };

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '15px', marginTop: '50px' }}>
                {list.map((g, i) => (
                    <div className="container mt-3" key={i}>
                        <div className="card" style={{ width: '220px', height: '300px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                            <img style={{ width: '100%', height: '150px', objectFit: 'cover' }} src={`https://localhost:7035/${g.picture}`} alt={g.productName} />
                            <div className="card-body" style={{ padding: '10px' }}>
                                <h3 className="card-title" style={{ fontSize: '1.2em', margin: '10px 0' }}>{g.productName}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                                    <Link className="btn btn-dark" to={`/moredetails/${g.gameId}`} style={{ flex: '1', marginRight: '5px' }}>More Details</Link>
                                    <button className="btn btn-dark" onClick={() => f1(g)} style={{ flex: '1' }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};










