import { useEffect, useState } from "react";
import {getReactALlGames,deleteReactGames}from "../axios/Gameaxios"   //
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";



export const Games=()=>{
 
    const[list,setlist]=useState([])

 const doSomething=async()=>{   //סיכרונית כי היא קוראת לפונקציה סיכרונית
    //כדי שלא תיהיה לולאה אין סופית 
    if(list.length==0)
    {
        //קבלת הנתונים מהשרת
         let y =( await getReactALlGames()).data;
        setlist(y)
    }
 }
   
    //פונקציה שקוראת בעת טעינת הקומפוננת
    
    useEffect(()=>{
        doSomething()
    },[])
    

    //---------------------לפי שיטת רייזי------------------
    
//   //משתנים לרענון
//   const navigate = useNavigate();
//   const location = useLocation();

    const f1 = async (gameId) => {
        debugger
        let y = await deleteReactGames(gameId)
        if (y) {
            alert("הצלחת")
        //     alert("הצלחת")
        //     //רענון
        //    // navigate(0); // זה ירענן את הדף הנוכחי
        //    const previousPath = location.pathname; // אחסון נתיב נוכחי

        //    navigate('/');// נווט לדף הבית

        //    //לאחר עיכוב שצוין, הוא מנווט בחזרה לנתיב השמור המקורי
        //    setTimeout(() => { // אופציונלי לרענן את הדף
        //        // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

        //        navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(50)
        //    }, 50);

        }
        else alert("נכשלת")
    }

    return <> <div className="container mt-6"><table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
        <thead>
            <tr>
                <th scope="col">קוד משחק</th>
                <th scope="col">שם משחק</th>
                <th scope="col">מחיר</th>
                <th scope="col">כמות</th>
                <th scope="col">קוד קטגוריה</th>
                <th scope="col">תמונה</th>
                <th scope="col">שם קטגוריה</th>
                <th scope="col">אפשריות נוספות</th>

            </tr>
        </thead>
        <tbody>
            {list.map((x, i) => (
                <tr key={x}>
                      <td>{x.gameId}</td>
                     <td>{x.productName}</td>
                     <td>{x.price}₪</td>
                     <td>{x.quantityInStock}</td>
                    <td>{x.categoryCode}</td>
                    <td><img width={'50px'} height={'50px'} src={`https://localhost:7035/${x.picture}`}></img></td>
                    <td>{x.categoryName}</td>
                    {<td> <button onClick={() => f1(x.gameId)}>מחק</button>
                        {<Link to={`/games/updategame/${x.gameId}`} >עדכון</Link>}
                    </td>}
                </tr>
            ))}

        </tbody>
    </table></div>
        <Link className="btn btn-outline-dark" to={`/games/addgame`}>הוספת משחק</Link>
        <Outlet></Outlet>
    </>
   
}


































//--------------לפי דרך שרי קומפננטת משחקים-----
/* let url="https://localhost:7035";
    return<div>
        <h3>כאן זה קומפננטת משחקים גישה של המנהל</h3>
         <table className="table">
            <thead>
                <tr>
                    <th>קוד</th>
                    <th>שם מוצר</th>
                    <th>קוד קטגוריה</th>
                    <th>מחיר</th>
                    <th>תמונה</th>
                    <th>כמות במלאי</th>
                    <th> מחיקה</th>  
                    <th> עדכון </th>
                </tr>
           //---אולי תמונה-------
                </thead>
            <tbody>
                 {list.map((x,i)=><tr key={i}>
                    <td>{x.gameId}</td>
                 <td>{x.productName}</td>
                 <td>{x.categoryCode}</td>
                 <td>{x.price}</td>
                 <td><img width={"30px"} src={`${url}/${x.picture}.jpg`}></img></td>
                 <td>{x.quantityInStock}</td>
                  <td>
                    <Link to={`/games/deletegame/${x.gameId}`} className="btn btn-outline-black w-100 mb-2">🗑️</Link>
                    </td> 
                     <td>
                    <Link to={`/games/updategame`} cclassName="btn btn-outline-black w-100 mb-2">🔄</Link>
                    </td> 
                 </tr>)}
            </tbody>
           </table>
           <br></br>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        
            <Link to={`/games/addgame`} className="btn btn-primary">add_newGame</Link>
    </div>
    <Outlet></Outlet>
    </div>*/
