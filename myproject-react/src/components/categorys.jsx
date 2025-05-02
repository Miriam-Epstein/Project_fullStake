import { useEffect, useState } from "react"
import { getAllReactCategorys } from "../axios/Categoryaxios";
import { Link, Outlet, useLocation, useNavigate, useViewTransitionState } from "react-router-dom";
import { deleteReactCategory } from "../axios/Categoryaxios";
export const Categorys=()=>{
   

    const[list,setlist]=useState([])

//-----------פונקציה שמציגה את כל הקטגוריות--------------
 const doSomething=async()=>{   //סיכרונית כי היא קוראת לפונקציה סיכרונית
    //כדי שלא תיהיה לולאה אין סופית 
    if(list.length==0)
    {
        //קבלת הנתונים מהשרת
         let y =( await getAllReactCategorys()).data;
        setlist(y)
    }
 }
   
   useEffect(()=>{
    doSomething();
   },[])

   //משתנים לרענון
   const navigate = useNavigate();
   const location = useLocation();

   const f1 = async (id) => {
    debugger
    let y = await deleteReactCategory(id)
    if (y)
    {
        alert("הצלחת")
       
   

    }
    else {alert("נכשלת")}
}

return <>
         <div className="container mt-4"><table className="table table-bordered" style={{ marginTop: '50px', textAlign: 'center' }}>
            <thead>
                <tr>
                    <th scope="col">categoryId </th>
                    <th scope="col">categoryName </th>
                    <th scope="col">אפשריות נוספות</th>
                </tr>
            </thead>
            <tbody>
                {list.map((x, i) => (
                    <tr key={x}>
                        <td>{x.categoryId}</td>
                        <td>{x.categoryName}</td>
                        <td> <button onClick={() => f1(x.categoryId)}>🗑️</button>
                            <Link to={`/categorys/updatecategory/${x.categoryId}`} >🔄</Link>
                        </td>
                    </tr>
                ))}
               
            </tbody>
        </table></div>
        <Link className="btn btn-outline-dark" to={`/categorys/addcategory`}>add_newCategory</Link>
        <Outlet></Outlet>
    </>

   
}














































//----------------לפי שיטת שרי-------
// return<div>
// <table className="table">
//     <thead>
//         <tr>
//             <th>categoryId</th>
//             <th>categoryName</th>
//             <th> מחיקה</th>  
//             <th> עדכון </th>
//         </tr>
//     </thead>
//     <tbody>
//         {list.map((x,i)=><tr key={i}>
//             <td>{x.categoryId}</td>
//             <td>{x.categoryName}</td>
//             <td>
//                  <button onClick={() => f1(x.categoryId)}>🗑️</button>
//                 {/* <Link to={`/categorys/deletecategory/${x.categoryId}`} className="btn btn-outline-black w-100 mb-2">🗑️</Link> */}
//             </td>
//             <td>
//             <Link to={`/categorys/updatecategory`} cclassName="btn btn-outline-black w-100 mb-2">🔄</Link>
//             </td>
//         </tr>)}
//     </tbody>
// </table>
// <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
//     <Link to={`/categorys/addcategory`} className="btn btn-primary">add_newCategory</Link>
// </div>
// <Outlet></Outlet>
// </div>