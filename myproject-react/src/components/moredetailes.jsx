import { useEffect, useState } from "react"
import {getGameReactById} from "../axios/Gameaxios";
import { useParams } from "react-router-dom";

export const Moredetailes=()=>{
   
    
    const [list, setList] = useState([])

    let  gameId = useParams().gameId

    const doSomthing = async () => {
        
        if (list.length == 0) {
            let y = (await getGameReactById(gameId)).data;
           
            setList(y)
        }
    }
        useEffect(() => {
        doSomthing()
    }, [])




    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ maxWidth: '600px', margin: 'aut0', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden', backgroundColor: 'white' }}>
                <img 
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
                    src={`https://localhost:7035/${list.picture}`} 
                    alt={list.productName} 
                />
                <div style={{ padding: '20px' }}>
                    <h1 className="card-title" style={{ fontSize: '2em', margin: '10px 0' }}>{list.productName}</h1>
                    <h2 className="card-text" style={{ fontSize: '1.5em', color: '#333', margin: '10px 0' }}>{list.price}₪</h2>
                    <h3 className="card-text" style={{ fontSize: '1em', color: '#555' }}>Game ID: {list.gameId}</h3>
                </div>
            </div>
        </div>
    );

    }























    
    //--------בלי עיצוב------
    // return <div style={{ display: 'grid'}}>
       
    //                     <img height={'300px'} src={`https://localhost:7035/${list.picture}`}></img>
    //                     <h1 className="card-title">{list.productName} :{list.gameId}</h1>
    //                     <h2 className="card-text">{list.price}₪</h2>
    //     </div>
