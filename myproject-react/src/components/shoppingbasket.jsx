// import { useContext} from "react"
// import MyContex from "../contex"
// import { Link } from "react-router-dom"

// export const Shoppingbasket=()=>{

//     //-------------קומפננטת סל קניות------------
  
//     const sal=useContext(MyContex).sal//------------משתנה שמכיל את סל הקניות----
//     const setsal=useContext(MyContex).setsal


// return <> <div className="container mt-6"><table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
//     <thead>
//         <tr>
//             <th scope="col">gameId</th>
//             <th scope="col">productName</th>
//             <th scope="col">price</th>
//             <th scope="col">quantity</th>
//             <th scope="col">delete</th>

//         </tr>
//     </thead>
//     <tbody>
//             {sal.map((x, i) => (
//                 <tr key={x}>
//                     <td>{x.gameId}</td>
//                     <td>{x.productName}</td>
//                     <td>{x.price}₪</td>
//                     <td>{x.quantity}</td>
//                     {/* <td> <button onClick={() => f1()}>מחק</button>
//                         {<Link to={`/games/updategame/${x.gameId}`} >עדכון</Link>}
//                     </td> */}
//                 </tr>
//             ))}

//         </tbody>
//     </table></div>
//            {/* --כאן יש כפתור שמבצע 3 שלבים :1.ביצוע הקניה2.שמירת הקניה3.שמירת פריטי הקניה-- */}
//        {/* <button className="btn btn-outline-dark" onClick={()=>f1(x)}>completionpurchase</button>  */}

    
//     </>
// }

//--------------------אני מנסה עיצוב נוסף והוא קשור לעיצוב של כמות בסל------------
// import { useContext } from "react";
// import MyContex from "../contex";
// import { Link } from "react-router-dom";

// export const Shoppingbasket = () => {
//     //------------- shopping cart component------------
//     const sal = useContext(MyContex).sal; //------------variable that contains the shopping cart----
//     const setsal = useContext(MyContex).setsal;

//     const increaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId) {
//                 item.quantity += 1;
//                 item.finalPrice = item.price * item.quantity; // Update final price
//             }
//             return item;
//         }));
//     };

//     const decreaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId && item.quantity > 1) {
//                 item.quantity -= 1;
//                 item.finalPrice = item.price * item.quantity; // Update final price
//             }
//             return item;
//         }));
//     };

//     return (
//         <div className="container mt-6">
//             <table className="table table-bor
//             dered" style={{ marginTop: '50px', textAlign: 'center' }}>
//                 <thead>
//                     <tr>
//                         <th scope="col">gameId</th>
//                         <th scope="col">productName</th>
//                         <th scope="col">price</th>
//                         <th scope="col">quantity</th>
//                         <th scope="col">finalPrice</th>
//                         <th scope="col">actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sal.map((x, i) => (
//                         <tr key={x.gameId}>
//                             <td>{x.gameId}</td>
//                             <td>{x.productName}</td>
//                             <td>{x.price}₪</td>
//                             <td>{x.quantity}</td>
//                             <td>{x.finalPrice}₪</td>
//                             <td>
//                                 <button onClick={() => increaseQuantity(x.gameId)}>+</button>
//                                 <button onClick={() => decreaseQuantity(x.gameId)}>-</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//--------------כמו הקודם אבל פותר את בעיית הספרות אחרי הנקודה של סכום סופי------
// import { useContext } from "react";
// import MyContex from "../contex";
// import { Link } from "react-router-dom";

// export const Shoppingbasket = () => {
//     //------------- shopping cart component------------
//     const sal = useContext(MyContex).sal; //------------variable that contains the shopping cart----
//     const setsal = useContext(MyContex).setsal;

//     const increaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId) {
//                 item.quantity += 1;
//                 item.finalPrice = Math.floor(item.price * item.quantity); // Update final price to a whole number
//             }
//             return item;
//         }));
//     };

//     const decreaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId && item.quantity > 1) {
//                 item.quantity -= 1;
//                 item.finalPrice = Math.floor(item.price * item.quantity); // Update final price to a whole number
//             }
//             return item;
//         }));
//     };

//     return (
//         <div className="container mt-6">
//             <table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
//                 <thead>
//                     <tr>
//                         <th scope="col">gameId</th>
//                         <th scope="col">productName</th>
//                         <th scope="col">price</th>
//                         <th scope="col">quantity</th>
//                         <th scope="col">finalPrice</th>
//                         <th scope="col">actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sal.map((x, i) => (
//                         <tr key={x.gameId}>
//                             <td>{x.gameId}</td>
//                             <td>{x.productName}</td>
//                             <td>{Math.floor(x.price)}₪</td> {/* Ensure price is a whole number */}
//                             <td>{x.quantity}</td>
//                             <td>{Math.floor(x.finalPrice)}₪</td> {/* Ensure final price is a whole number */}
//                             <td>
//                                 <button onClick={() => increaseQuantity(x.gameId)}>+</button>
//                                 <button onClick={() => decreaseQuantity(x.gameId)}>-</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

//-----------------ועכשיו סל קניות מועצב בבוסטרפים---------------
// import { useContext } from "react";
// import MyContex from "../contex";
// import { Link } from "react-router-dom";

// export const Shoppingbasket = () => {
//     //------------ shopping cart component------------
//     const sal = useContext(MyContex).sal; //-----------variable that contains the shopping cart----
//     const setsal = useContext(MyContex).setsal;

//     const increaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId) {
//                 item.quantity += 1;
//                 item.finalPrice = item.price * item.quantity; // Update final price
//             }
//             return item;
//         }));
//     };

//     const decreaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId && item.quantity > 1) {
//                 item.quantity -= 1;
//                 item.finalPrice = item.price * item.quantity; // Update final price
//             }
//             return item;
//         }));
//     };

//     return (
//         <div className="container mt-6">
//             <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>Shopping Basket</h2>
//             <table className="table table-bordered table-striped text-center" style={{ backgroundColor: '#f8f9fa' }}>
//                 <thead className="thead-light">
//                     <tr>
//                         <th scope="col">Image</th>
//                         <th scope="col">gameId</th>
//                         <th scope="col">productName</th>
//                         <th scope="col">price</th>
//                         <th scope="col">quantity</th>
//                         <th scope="col">finalPrice</th>
//                         <th scope="col">actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sal.map((x, i) => (
//                         <tr key={x.gameId}>
//                             <td>
//                                 <img 
//                                     src={`https://localhost:7035/${x.picture}`} 
//                                     alt={x.productName} 
//                                     style={{ width: '50px', height: 'auto', borderRadius: '5px' }} 
//                                 />
//                             </td>
//                             <td>{x.gameId}</td>
//                             <td>{x.productName}</td>
//                             <td>{x.price}₪</td>
//                             <td>{x.quantity}</td>
//                             <td>{x.finalPrice}₪</td>
//                             <td>
//                                 <button 
//                                     className="btn btn-success m-1" 
//                                     onClick={() => increaseQuantity(x.gameId)} 
//                                     style={{ borderRadius: '5px' }}
//                                 >
//                                     +
//                                 </button>
//                                 <button 
//                                     className="btn btn-danger m-1" 
//                                     onClick={() => decreaseQuantity(x.gameId)} 
//                                     style={{ borderRadius: '5px' }}
//                                 >
//                                     -
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//-----------------זהו ועכשיו בעזרת ה' פעם אחרונה גם מעוצב וגם 2 ספרות אחרי הנקודה----------
// import { useContext } from "react";
// import MyContex from "../contex";

// export const Shoppingbasket = () => {
//     //------------ shopping cart component------------
//     const sal = useContext(MyContex).sal; //-----------variable that contains the shopping cart----
//     const setsal = useContext(MyContex).setsal;

//     const increaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId) {
//                 item.quantity += 1;
//                 item.finalPrice = (item.price * item.quantity).toFixed(2); // Update final price with 2 decimal places
//             }
//             return item;
//         }));
//     };

//     const decreaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId && item.quantity > 1) {
//                 item.quantity -= 1;
//                 item.finalPrice = (item.price * item.quantity).toFixed(2); // Update final price with 2 decimal places
//             }
//             return item;
//         }));
//     };

//     return (
//         <div className="container mt-6">
//             <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>Shopping Basket</h2>
//             <table className="table table-bordered table-striped text-center" style={{ backgroundColor: '#f8f9fa' }}>
//                 <thead className="thead-light">
//                     <tr>
//                         <th scope="col">Image</th>
//                         <th scope="col">gameId</th>
//                         <th scope="col">productName</th>
//                         <th scope="col">price</th>
//                         <th scope="col">quantity</th>
//                         <th scope="col">finalPrice</th>
//                         <th scope="col">actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sal.map((x) => (
//                         <tr key={x.gameId}>
//                             <td>
//                                 <img 
//                                     src={`https://localhost:7035/${x.picture}`} 
//                                     alt={x.productName} 
//                                     style={{ width: '50px', height: 'auto', borderRadius: '5px' }} 
//                                 />
//                             </td>
//                             <td>{x.gameId}</td>
//                             <td>{x.productName}</td>
//                             <td>{x.price.toFixed(2)}₪</td> {/* Ensure price is displayed with 2 decimal places */}
//                             <td>{x.quantity}</td>
//                             <td>{parseFloat(x.finalPrice).toFixed(2)}₪</td> {/* Ensure final price is displayed with 2 decimal places */}
//                             <td>
//                                 <button 
//                                     className="btn btn-success m-1" 
//                                     onClick={() => increaseQuantity(x.gameId)} 
//                                     style={{ borderRadius: '5px' }}
//                                 >
//                                     +
//                                 </button>
//                                 <button 
//                                     className="btn btn-danger m-1" 
//                                     onClick={() => decreaseQuantity(x.gameId)} 
//                                     style={{ borderRadius: '5px' }}
//                                 >
//                                     -
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

//---------------------------שוב פעם אחרונה ובעזרת ה' התמונות יעבדו-----------------------
//-----------------------------הבוקר---- לפני עיצוב 1--------
import { useContext } from "react";
import MyContex from "../contex";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";


export const Shoppingbasket = () => {
    //------------ shopping cart component------------
    const sal = useContext(MyContex).sal; //-----------variable that contains the shopping cart----
    const setsal = useContext(MyContex).setsal;
    const customer = useContext(MyContex).currentCustomer
    const sum = useContext(MyContex).sum
    const setsum = useContext(MyContex).setsum
    const passUser = useContext(MyContex).passUser

    const Customer = useContext(MyContex).currentCustomer;


    

     const mynevigate = useNavigate();
    const location = useLocation();


    const increaseQuantity = (gameId) => {
        setsal(sal.map(item => {
            if (item.gameId === gameId) {
                item.quantity += 1;
                item.finalPrice = (item.price * item.quantity).toFixed(2); // Update final price with 2 decimal places
            }
            return item;
        }));
    };
         
     const chak = ()=>{

        if(Customer == "no counct")
            {
           alert("לא התחברת מועבר לעמוד התחברות")
           mynevigate("/login")   //ניתוב יזום
           }
           else{
            mynevigate("/completionpurchase")
           }
     }


    const decreaseQuantity = (gameId) => {
        setsal(sal.reduce((acc, item) => {
            if (item.gameId === gameId) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    item.finalPrice = (item.price * item.quantity).toFixed(2); // Update final price with 2 decimal places
                    acc.push(item);
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, []));
    };


    

    return (
        <div className="container mt-6">
            <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>Shopping Basket</h2>
           
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>
                    <i className="fas fa-shopping-cart text-primary"></i> Your Sal
                </h2>
                {/* mynevigate("../completionpurchase") */}
                {sal.length !== 0 && <button className="btn btn-success" onClick={() => chak()}>
                    <i className="fas fa-credit-card"></i> Complete Purchase
                </button>}
            </div>

            <table className="table table-bordered table-striped text-center" style={{ backgroundColor: '#f8f9fa' }}>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">gameId</th>
                        <th scope="col">productName</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">finalPrice</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sal.map((x) => (
                        <tr key={x.gameId}>
                          
                          
                            
                           

                            <td>{x.gameId}</td>
                            <td>{x.productName}</td>
                            <td>{parseFloat(x.price).toFixed(2)}₪</td> {/* Ensure price is displayed with 2 decimal places */}
                            <td>{x.quantity}</td>
                            <td>{parseFloat(x.finalPrice).toFixed(2)}₪</td> {/* Ensure final price is displayed with 2 decimal places */}
                            <td>
                                <button 
                                    className="btn btn-success m-1" 
                                    onClick={() => increaseQuantity(x.gameId)} 
                                    style={{ borderRadius: '5px' }}
                                >
                                    +
                                </button>
                                <button 
                                    className="btn btn-danger m-1" 
                                    onClick={() => decreaseQuantity(x.gameId)} 
                                    style={{ borderRadius: '5px' }}
                                >
                                    -
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {sal.length === 0 && (
                <div className="text-center text-muted py-5">
                    <h4>Your Sal is empty.</h4>
                </div>
            )}

        </div>
    );
};












        {/* <button style={{ marginLeft: "40%" }} className="btn btn-outline-primary  mb-2" onClick={() => chekUser()}chekUser>לסיום קניה</button> */}

// //בודקת האם יש לקוח או לא?
    // const chekUser = () => {
    //     if (customer == false) {
    //         alert("לא התחברת מועבר לעמוד התחברות")
    //         mynevigate("/login")   //ניתוב יזום
    //     }
    //     else {
    //         //הפעלת שלושת הפונקציות לשמירה
    //         save()
    //         debugger

    //         //בשביל שאני יוכל להדפיס בסוף כמה עלה לו
    //         let s=0;
    //         for (let index = 0; index < sal.length; index++) {
    //             s=s+ (sal[index]).totsalEmount  
    //         }
    //         setsum(s);
    //         console.log(s)
    //         alert(`s,${s}`)

    //         mynevigate("/completionpurchase") 
            
    //     }

    // }
    // //הפעל ת שלושת הפונקציות לשמירה
    // const save = async () => {
    //     debugger
    //     let custId = (await haveThisCustomerReact(customer, passUser)).data
    //     console.log("custId", custId)
    //     let y = (await SaveCart_Shopping_Axios(sal, custId)).data
    //     if (y)
    //         alert("הקניה נשמרה")
    //     else
    //         alert("הקניה לא נשמרה")
    //     let p = (await saveCart_ShoppingDetails_Axios(sal, y))
    //     if (p)
    //         alert("פרטי הקניה נשמרו")
    //     else
    //         alert("פרטי הקניה לא נשמרו")
    //     let e = (await SaveReactAmount(sal))
    //     if (e)
    //         alert("עדכון כמות בוצע בהצלחה")
    //     else
    //         alert("עדכון כמות לאאא הצליח")
    // }


//-----------------------------עיצובמספר 1--------
// import { useContext } from "react";
// import MyContex from "../contex";
// import { useNavigate } from "react-router-dom";
// import { SaveCart_Shopping_Axios } from "../axios/Shoppingaxios";

// export const Shoppingbasket = () => {
//     const sal = useContext(MyContex).sal; // סל הקניות
//     const setsal = useContext(MyContex).setsal;
//     const Customer = useContext(MyContex).currentCustomer;
//     const sum = useContext(MyContex).sum;
//     const setsum = useContext(MyContex).setsum;

//     const myNavigate = useNavigate();

//     const increaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId) {
//                 item.quantity += 1;
//                 item.finalPrice = (item.price * item.quantity).toFixed(2); // עדכון המחיר הסופי
//             }
//             return item;
//         }));
//     };

//     const decreaseQuantity = (gameId) => {
//         setsal(sal.reduce((acc, item) => {
//             if (item.gameId === gameId) {
//                 if (item.quantity > 1) {
//                     item.quantity -= 1;
//                     item.finalPrice = (item.price * item.quantity).toFixed(2); // עדכון המחיר הסופי
//                     acc.push(item);
//                 }
//             } else {
//                 acc.push(item);
//             }
//             return acc;
//         }, []));
//     };

//     const chak = () => {
//         if (Customer === "no counct") {
//             alert("לא התחברת מועבר לעמוד התחברות");
//             myNavigate("/login"); // ניווט לעמוד התחברות
//         } else {
//             myNavigate("/completionpurchase"); // ניווט לעמוד רכישה
//         }
//     };

//     // חישוב המחיר הכולל
//     const totalPrice = sal.reduce((total, item) => total + parseFloat(item.finalPrice), 0).toFixed(2);

//     return (
//         <div className="container my-5">
//             <h2 className="text-center mb-4">Your Shopping Basket</h2>

//             {sal.length === 0 ? (
//                 <div className="alert alert-info text-center" role="alert">
//                     <h4 className="alert-heading">Your basket is empty!</h4>
//                     <p>It looks like you haven't added any items to your basket yet. Please browse our products.</p>
//                     <button className="btn btn-primary" onClick={() => myNavigate("/home")}>Go to Home</button>
//                 </div>
//             ) : (
//                 <div>
//                     <table className="table table-bordered table-striped">
//                         <thead>
//                             <tr>
//                                 <th scope="col">Product</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Price</th>
//                                 <th scope="col">Quantity</th>
//                                 <th scope="col">Total</th>
//                                 <th scope="col">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {sal.map((item, index) => (
//                                 <tr key={index}>
//                                     <td><img src={item.image} alt={item.name} className="img-fluid" style={{ width: '80px', height: 'auto' }} /></td>
//                                     <td>{item.name}</td>
//                                     <td>${item.price}</td>
//                                     <td>
//                                         <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQuantity(item.gameId)}>-</button>
//                                         {item.quantity}
//                                         <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQuantity(item.gameId)}>+</button>
//                                     </td>
//                                     <td>${item.finalPrice}</td>
//                                     <td>
//                                         <button className="btn btn-danger btn-sm" onClick={() => setsal(sal.filter(i => i.gameId !== item.gameId))}>
//                                             Remove
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <div className="d-flex justify-content-between mt-4">
//                         <h4>Total Price: <span className="text-success">${totalPrice}</span></h4>
//                         <div>
//                             <button className="btn btn-success" onClick={chak}>Proceed to Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

//-----------------שוב לפי החזרה קודמת----------
// import { useContext } from "react";
// import MyContex from "../contex";
// import { useNavigate } from "react-router-dom";

// export const Shoppingbasket = () => {
//     const sal = useContext(MyContex).sal; // סל הקניות
//     const setsal = useContext(MyContex).setsal;
//     const Customer = useContext(MyContex).currentCustomer;
//     const sum = useContext(MyContex).sum;
//     const setsum = useContext(MyContex).setsum;
//     const myNavigate = useNavigate();

//     const increaseQuantity = (gameId) => {
//         setsal(sal.map(item => {
//             if (item.gameId === gameId) {
//                 item.quantity += 1;
//                 item.finalPrice = (item.price * item.quantity).toFixed(2); // עדכון המחיר הסופי
//             }
//             return item;
//         }));
//     };

//     const decreaseQuantity = (gameId) => {
//         setsal(sal.reduce((acc, item) => {
//             if (item.gameId === gameId) {
//                 if (item.quantity > 1) {
//                     item.quantity -= 1;
//                     item.finalPrice = (item.price * item.quantity).toFixed(2); // עדכון המחיר הסופי
//                     acc.push(item);
//                 }
//             } else {
//                 acc.push(item);
//             }
//             return acc;
//         }, []));
//     };

//     const chak = () => {
//         if (Customer === "no counct") {
//             alert("לא התחברת מועבר לעמוד התחברות");
//             myNavigate("/login"); // ניווט לעמוד התחברות
//         } else {
//             myNavigate("/completionpurchase"); // ניווט לעמוד רכישה
//         }
//     };

    // חישוב המחיר הכולל
//     const totalPrice = sal.reduce((total, item) => total + parseFloat(item.finalPrice), 0).toFixed(2);

//     return (
//         <div className="container mt-6">
//             <h2 className="text-center mb-4" style={{ color: '#007BFF' }}>Shopping Basket</h2>

//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h2>
//                     <i className="fas fa-shopping-cart text-primary"></i> Your Shopping Cart
//                 </h2>
//                 {/* If cart is not empty, show the "Complete Purchase" button */}
//                 {sal.length !== 0 && <button className="btn btn-success" onClick={chak}>
//                     <i className="fas fa-credit-card"></i> Complete Purchase
//                 </button>}
//             </div>

//             <table className="table table-bordered table-striped text-center" style={{ backgroundColor: '#f8f9fa' }}>
//                 <thead className="thead-light">
//                     <tr>
//                         <th scope="col">Product</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Price</th>
//                         <th scope="col">Quantity</th>
//                         <th scope="col">Total</th>
//                         <th scope="col">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sal.map((x) => (
//                         <tr key={x.gameId}>
//                             <td><img src={x.image} alt={x.productName} className="img-fluid" style={{ width: '80px', height: 'auto' }} /></td>
//                             <td>{x.productName}</td>
//                             <td>{parseFloat(x.price).toFixed(2)}₪</td>
//                             <td>
//                                 <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQuantity(x.gameId)}>-</button>
//                                 {x.quantity}
//                                 <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQuantity(x.gameId)}>+</button>
//                             </td>
//                             <td>{parseFloat(x.finalPrice).toFixed(2)}₪</td>
//                             <td>
//                                 <button className="btn btn-danger btn-sm" onClick={() => setsal(sal.filter(i => i.gameId !== x.gameId))}>
//                                     <i className="fas fa-trash"></i> Remove
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* If cart is empty, show a message */}
//             {sal.length === 0 && (
//                 <div className="text-center text-muted py-5">
//                     <h4>Your cart is empty.</h4>
//                     <p>It looks like you haven't added any items yet. Start shopping now!</p>
//                     <button className="btn btn-primary" onClick={() => myNavigate("/home")}>Go to Home</button>
//                 </div>
//             )}

//             {/* Total Price Section */}
//             {sal.length !== 0 && (
//                 <div className="d-flex justify-content-between mt-4">
//                     <h4>Total Price: <span className="text-success">{totalPrice}₪</span></h4>
//                     <div>
//                         <button className="btn btn-success" onClick={chak}>Proceed to Checkout</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

//לפי דרך לא דוכרת מי ולא עובד!!!!
// {/* <img 
// src={`https://localhost:7035/${x.picture}`} 
// alt={x.productName} 
// style={{ width: '50px', height: 'auto', borderRadius: '5px' }} 
// />  */}


//דרך הצגת תמונה בסל קניות לפי שני לא גמור ונשמע לי קצת מסובך
                           {/* <td className="text-center">
                                <img
                                    className="rounded"
                                    src={`${url_Cart}Pictures/${getCategoryReactByCategoryId(value.gameId)}/${value.gameName}/main_pic.webp`}
                                    alt={`${value.gameName}`}
                                    style={{ width: "120px", height: "80px", objectFit: "cover" }}
                                />
                            </td> */}