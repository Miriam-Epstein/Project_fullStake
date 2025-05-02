import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Login} from "./login"
import { Signup } from "./signup"
import { Moredetailes } from "./moredetailes"
import { Categorys } from "./categorys"
import { Addcategory } from "./addcategory"
import { Updatecategory } from "./updatecategory"
import { Updategame } from "./updategame"
import { Games } from "./games"
import { Addgame } from "./addgame"
import MyContex from "../contex"    
import { Deletecategory } from "./deletecategory"
import { Deletegame } from "./deletegame"
import { useContext } from "react"
import { Shoppingbasket  } from "./shoppingbasket"
import { Completionpurchase } from "./completionpurchase"
import { Personalarea } from "./personalarea"
import { ShowSaleDetail } from "./showSaleDetail"
import { ShowSaleDetaildWind } from "./showSaleDetaildWind"


export const Myrouting=()=>{


    return <div>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
            <Route path="moredetails/:gameId" element={<Moredetailes></Moredetailes>}></Route>

             {/* --------------------אפשרויות אלו נועדו לממשק לקוח ------------ */}
            
            <Route path="shoppingbasket" element={<Shoppingbasket></Shoppingbasket>}></Route>
               {/* ----------------ממשק זה מיועד רק ללקוח מחובר---------- */}
            <Route path="personalarea"  element={<Personalarea></Personalarea>}>
                <Route path="showSaleDetaildWind/:shoppingId" element={<ShowSaleDetaildWind></ShowSaleDetaildWind>}></Route>
            </Route>
           
            <Route path="completionpurchase" element={<Completionpurchase></Completionpurchase>}></Route>

             {/* -------------אפשריות אלו מיועדות רק לממשק מנהל------- */}
            <Route path="categorys" element={<Categorys></Categorys>}>
                <Route path="addcategory" element={<Addcategory></Addcategory>}></Route>
                <Route path="updatecategory/:categoryId" element={<Updatecategory></Updatecategory>}></Route>
            </Route> 

            <Route path="games" element={<Games></Games>}>
                <Route path="addgame" element={<Addgame></Addgame>}></Route> 
                <Route path="updategame/:gameId" element={<Updategame></Updategame>} ></Route>
            </Route>  
           
        </Routes>
    </div>
}





//--------------------לפני שינו זה לפי דרך שרי עם קומפננטת מחיקה-----------
// return <div>
//         <Routes>
//         <Route path="/" element={<Home></Home>}>
//             <Route path="moredetails/:gameId" element={<Moredetailes></Moredetailes>}></Route>
//         </Route>

//             <Route path="home" element={<Home></Home>}>
//                 <Route path="moredetails/:gameId" element={<Moredetailes></Moredetailes>}></Route>
//             </Route>

//             <Route path="login" element={<Login></Login>}></Route>
//             <Route path="signup" element={<Signup></Signup>}></Route>
            
//             {/* <Route path="end" element={<End></End>}></Route>
//             <Route path="cart" element={<Cart></Cart>}></Route> */}
            
//             <Route path="categorys" element={<Categorys></Categorys>}>
//                 <Route path="addCategory" element={<Addcategory></Addcategory>}></Route>
//                 <Route path="updatecategory/:categoryId" element={<Updatecategory></Updatecategory>}></Route>
//                 <Route path="deletecategory/:categoryId" element={<Deletecategory></Deletecategory>}></Route>
//             </Route> 

//             <Route path="games" element={<Games></Games>}>
//                 <Route path="addgame" element={<Addgame></Addgame>}></Route> 
//                 <Route path="updategame/:gameId" element={<Updategame></Updategame>} ></Route>
//                 <Route path="deletegame/:gameId" element={<Deletegame></Deletegame>}></Route>
//             </Route>  

//         </Routes>
//     </div>
// }