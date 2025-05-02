import { useEffect, useState } from "react"
import { addReactGames } from "../axios/Gameaxios"
import { useLocation, useNavigate } from "react-router-dom";
export const  Addgame=()=>{

    //------משתנה גלובלי שמכיל את המשחק להוספה----
    const [item,setitem]=useState({
    "gameId": 0,
    "productName": "string",
    "categoryCode": 0,
    "price": 0,
    "picture": "string",
    "quantityInStock": 0 
    })

    

    const addGood=async()=>{
        let y=( await addReactGames(item)).data;
        if(y)
        {
            alert("הצלחת המשחק נוסף בהצלחה")
            
        }
        else
        {
            alert("נכשלת המשחק לא נוסף")
        }
    }
    return<div>
    <input className="input" type={'number'}placeholder={' gameId'}onBlur={(e)=>setitem({...item,gameId:e.target.value})}></input>
    <input className="input" type={'text'}placeholder={' productName'}onBlur={(e)=>setitem({...item, productName:e.target.value})}></input>
    <input className="input" type={'number'}placeholder={' categoryCode'}onBlur={(e)=>setitem({...item,categoryCode:e.target.value})}></input>
    <input className="input" type={'number'}placeholder={' picture'}onBlur={(e)=>setitem({...item,picture:e.target.value})}></input>
    <input className="input" type={'text'}placeholder={' gameImg'}onBlur={(e)=>setitem({...item,gameImg:e.target.value})}></input>
    <input className="input" type={'number'}placeholder={' quantityInStock'}onBlur={(e)=>setitem({...item,quantityInStock:e.target.value})}></input>
    <br></br>
    <button className="btn btn-primary" onClick={()=>{addGood()}}> save_addGame  </button>

    <br></br>

</div>

}


































//---------------****--------------------
// import { useEffect, useState } from "react";
// import { addReactGames } from "../axios/Gameaxios";
// import { useLocation, useNavigate } from "react-router-dom";

// export const Addgame = () => {
//     // משתנה שמכיל את המשחק להוספה
//     const [item, setItem] = useState({
//         gameId: 0,
//         productName: "",
//         categoryCode: 0,
//         price: 0,
//         picture: "",
//         gameImg: "",
//         quantityInStock: 0,
//     });

//     const addGood = async () => {
//         let y = (await addReactGames(item)).data;
//         if (y) {
//             alert("המשחק נוסף בהצלחה");
//         } else {
//             alert("המשחק לא נוסף");
//         }
//     };

//     return (
//         <div className="container">
//             <h2>הוספת משחק חדש</h2>
//             <div className="form-group">
//                 <input
//                     className="form-control"
//                     type="number"
//                     placeholder="gameId"
//                     onBlur={(e) => setItem({ ...item, gameId: e.target.value })}
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     className="form-control"
//                     type="text"
//                     placeholder="productName"
//                     onBlur={(e) => setItem({ ...item, productName: e.target.value })}
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     className="form-control"
//                     type="number"
//                     placeholder="categoryCode"
//                     onBlur={(e) => setItem({ ...item, categoryCode: e.target.value })}
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     className="form-control"
//                     type="text"
//                     placeholder="picture"
//                     onBlur={(e) => setItem({ ...item, picture: e.target.value })}
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     className="form-control"
//                     type="text"
//                     placeholder="gameImg"
//                     onBlur={(e) => setItem({ ...item, gameImg: e.target.value })}
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     className="form-control"
//                     type="number"
//                     placeholder="quantityInStock"
//                     onBlur={(e) => setItem({ ...item, quantityInStock: e.target.value })}
//                 />
//             </div>
//             {/* <br />
//             <button className="btn btn-primary" onClick={addGood}>
//                 שמור והוסף משחק
//             </button> */}
//              <br></br>
//      <        button className="btn btn-primary" onClick={()=>{addGood()}}> save_addGame  </button>
//            <br></br>
//         </div>
//     );
// };




 /* //--------------כל זה בצורה כתיבה של ריזי--------------
    const enterTolist = async ()=>{
        if (list.length == 0) {
            let y = (await getAllReactCategorys()).data;
            setList(y)
        }
    }

    const [list, setList] = useState([])
    useEffect(() => {
        enterTolist()
    },[])


    //פונקציה שבודקת האם המשחק נוסף בהצלחה או חלילה לא

  const f1 = async ()=>{
   
    let y  = await  addReactGames(item)
    if(y)
    {
        alert("כל הכבוד המשחק נוסף בהצלחה")
            navigate('/');// נווט לדף הבית
    }
    else{
        alert("אוי אוי אוי המשחק לא נוסף ")
    }
  }
  return <div>
  <input type={'text'} placeholder="productName" onBlur={(e) => setitem({ ...item, productName: e.target.value })} />
  <input type={'number'} placeholder="price" onBlur={(e) => setitem({ ...item, price: e.target.value })} />
  <input type={'number'} placeholder="quantityInStock" onBlur={(e) => setitem({ ...item, quantityInStock: e.target.value })} />
  <select onBlur={(e) => setitem({ ...item, categoryCode: e.target.value })}>
      {list.map((x,i)=><option value={x.categoryCode}>{x.nameCategory} code: {x.categoryCode}</option>)}
  </select>
  <input type={'text'} placeholder="picture" onBlur={(e) => setitem({ ...item, picture: e.target.value })} />
  <input type={'text'} placeholder="categoryName" onBlur={(e) => setitem({ ...item, categoryName: e.target.value })} />

  <input type={'button'} onClick={() => f1()} value="שמור" />
  
</div>*/
