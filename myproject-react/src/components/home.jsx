// import { useContext, useEffect, useState } from "react"
// import { getReactALlGames } from "../axios/Gameaxios"
// import MyContex from "../contex"
// import { Link, useParams } from "react-router-dom"
// export const Home=() => {


// const sal = useContext(MyContex).sal//---------משתנה גלובלי שמכיל את הסל קניות---

// const setsal=useContext(MyContex).setsal//-----משתנה גלובלי שמכיל את הלערוך את הסל---

// //---------משתנה שמכיל את נתוני המוצר שמתווסף----
// const addtosal=({
//   "gameId": 0,
//   "productName": "string",
//   "quantity": 0,
//   "price": 0,
//   "finalPrice": 0})
// //----------------עמוד הבית הצגת המשחקים בצורה יפה--------------
// // -------כל זה גישה אל השרת ולקיחת הנתונים----------
//   const [list,setlist]=useState([])



//   const doSomthing = async()=>{

//     if(list.length == 0)
//     {
//       let y =( await getReactALlGames()).data;//שימוש בפונקצית הצגת כל המשחקים מהשרת
//       setlist(y)
//     }
//    }


// useEffect(()=>{doSomthing()},[])


//  //פונקציה שמוסיפה לסל
//   const f1=(g)=>{
//     addtosal.gameId=g.gameId
//     addtosal.productName=g.productName
//     addtosal.price=g.price
//     addtosal.quantity=1
//     addtosal.finalPrice=g.price

//     setsal([...sal,addtosal])//-----מכניסה את המוצר שנוסף----עורכת את הסל----

//    }



// //------------של ריזי------------------------
// //-------------------מציג את כל המשחקים בצורה יפה-----------------
// //-------------כאן צריך להשתמש במשתנים כמו שכתוב בשרת כי שולפים מהשרת--------------
// return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px' ,marginTop:'100px'}}>
// {list.map((g, i) => (
//     <div className="container mt-3" key={i}>
//         <div className="card" style={{ width: '220px',height:'200px' }}>
//             <div className="card-body">
//                 <h3 className="card-title"> {g.productName}</h3>
//                 <img height={'300px'} src={`https://localhost:7035/${g.picture}`}></img>
//                 <Link className="btn btn-outline-dark" to={`/moredetails/${g.gameId}`}>moredetails </Link> 
//                <button className="btn btn-outline-dark" onClick={()=>f1(g)}> addTosal</button>
//            </div>
//         </div>
//     </div>
// ))}

// </div>

// }

//-------------עיצוב נוסף בשביל שנוסיף לסל כמות לפי הלחיצות-------
import { useContext, useEffect, useState } from "react";
import { getReactALlGames } from "../axios/Gameaxios";
import MyContex from "../contex";
import { Link } from "react-router-dom";

export const Home = () => {
    const sal = useContext(MyContex).sal; //---------a global variable that contains the shopping cart---
    const setsal = useContext(MyContex).setsal; //-----a global variable that contains the edit the basket---

    //---------variable that contains the data of the product being added----
    const addtotal = {
        gameId: 0,
        productName: "string",
        quantity: 0,
        price: 0,
        finalPrice: 0,
    };

    //----------------home page presenting the games beautifully--------------
    const [list, setlist] = useState([]);

    const doSomthing = async () => {
        if (list.length === 0) {
            let y = (await getReactALlGames()).data; //Using the function to display all games from the server
            setlist(y);
        }
    };

    useEffect(() => {
        doSomthing();
    }, []);

    //A function that adds to the basket
    const f1 = (g) => {
        const existingProduct = sal.find(item => item.gameId === g.gameId);

        if (existingProduct) {
            existingProduct.quantity += 1; // Increase quantity
            existingProduct.finalPrice = existingProduct.price * existingProduct.quantity; // Update final price
            setsal([...sal]);
        } else {
            addtotal.gameId = g.gameId;
            addtotal.productName = g.productName;
            addtotal.price = g.price;
            addtotal.quantity = 1;
            addtotal.finalPrice = g.price;

            setsal([...sal, addtotal]); //-----inserts the added product----edits the basket----
        }
    };

    //-----------------Displays all games beautifully------------------
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














































///-------------------אני מנסה שניה עיצוב אחר--------------
// import { useContext, useEffect, useState } from "react";
// import { getReactALlGames } from "../axios/Gameaxios";
// import MyContex from "../contex";
// import { Link } from "react-router-dom";

// export const Home = () => {
//     const sal = useContext(MyContex).sal; //---------a global variable that contains the shopping cart---
//     const setsal = useContext(MyContex).setsal; //-----a global variable that contains the edit the basket---

//     //---------variable that contains the data of the product being added----
//     const addtosal = {
//         gameId: 0,
//         productName: "string",
//         quantity: 0,
//         price: 0,
//         finalPrice: 0,
//     };

//     //----------------home page presenting the games beautifully--------------
//     const [list, setlist] = useState([]);

//     const doSomthing = async () => {
//         if (list.length === 0) {
//             let y = (await getReactALlGames()).data; //Using the function to display all games from the server
//             setlist(y);
//         }
//     };

//     useEffect(() => {
//         doSomthing();
//     }, []);

//     //A function that adds to the basket
//     const f1 = (g) => {
//         addtosal.gameId = g.gameId;
//         addtosal.productName = g.productName;
//         addtosal.price = g.price;
//         addtosal.quantity = 1;
//         addtosal.finalPrice = g.price;

//         setsal([...sal, addtosal]); //-----inserts the added product----edits the basket----
//     };

//     //-----------Rizzy's------------------------
//     //------------------Displays all games beautifully------------------
//     return (
//         <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '15px', marginTop: '50px' }}>
//                 {list.map((g, i) => (
//                     <div className="container mt-3" key={i}>
//                         <div className="card" style={{ width: '220px', height: '300px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
//                             <img style={{ width: '100%', height: '150px', objectFit: 'cover' }} src={`https://localhost:7035/${g.picture}`} alt={g.productName} />
//                             <div className="card-body" style={{ padding: '10px' }}>
//                                 <h3 className="card-title" style={{ fontSize: '1.2em', margin: '10px 0' }}>{g.productName}</h3>
//                                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
//                                     <Link className="btn btn-dark" to={`/moredetails/${g.gameId}`} style={{ flex: '1', marginRight: '5px' }}>More Details</Link>
//                                     <button className="btn btn-dark" onClick={() => f1(g)} style={{ flex: '1' }}>Add to Cart</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


//---------------ללא עיצוב מחזיר ללא תמונה---
// return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px' ,marginTop:'100px'}}>
// {list.map((g, i) => (
//     <div className="container mt-3" key={i}>
//         <div className="card" style={{ width: '220px',height:'200px' }}>
//             <div className="card-body">
//                 <h3 className="card-title">{g.gameId} : {g.productName}</h3>
//                 <p className="card-text">{g.price}₪</p>
//                 <Link className="btn btn-outline-dark" to={`/moredetails/${g.gameId}`}>moredetails </Link> 
//                <button className="btn btn-outline-dark" onClick={()=>f1(g)}> addTosal</button>
//            </div>
//         </div>
//     </div>
// ))}

// </div>


//-----מלכה ברוק מציע עיצוב---------
// return (
//   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', marginTop: '100px' }}>
//       {list.map((g, i) => (
//           <div className="container mt-3" key={i}>
//               <div className="card" style={{ width: '300px', height: '200px', border: '2px solid #40E0D0' /* Turquoise color */ }}>
//               <div className="card-body bg-primary text-white d-flex flex-column justify-content-between">
//               <h5 className="card-title">{g.productName}</h5>
//               <p className="card-text">{g.price}₪</p>
//               <p className="card-id" style={{ fontSize: '0.8em' }}>Game ID: {g.gameId}</p>
//                <Link className="btn btn-outline-dark" to={`/moredetails/${g.gameId}`}>פרטים נוספים</Link> 
//                 <button className="btn btn-outline-dark" onClick={()=>f1(g)}>הוסף לסל</button>
//           </div>
//       </div>
//   </div>
// ))}
// </div>
// );





//------------של ריזי------------------------
/*return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px' ,marginTop:'100px'}}>
{list.map((g, i) => (
    <div className="container mt-3" key={i}>
        <div className="card" style={{ width: '220px',height:'200px' }}>
            <div className="card-body">
                <h4 className="card-title">{g.productName} :{g.gameid}</h4>
                <p className="card-text">{g.price}₪</p>
            </div>
        </div>
    </div>
))}

</div>

}*/

//----------------זה שלי----------------------
/*return <div>
     <h4>******************************************************************</h4>
   {list.map((x,i) => ( <p key={i}>{x.productName}********{x.price}*****{x.nameCategory}******* </p>))}
     <h4>******************************************************************</h4>
</div>
}*/


//--------------------של שרי --------------------
/*
let url="https://localhost:7035"
   
return <div className="container">
<div className="row g-3"> 
{list.map((x, i) => (
  <div key={i} className="col-sm-6 col-md-4 col-lg-3">
    <div className="card h-100 shadow-sm" style={{ width: "100%" }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <h4 className="card-title">{x.productName}</h4>
        <p className="card-text">Price: {x.price}$</p>
      </div>
    </div>
  </div>
))}
</div>
<Outlet></Outlet>
</div>

}*/