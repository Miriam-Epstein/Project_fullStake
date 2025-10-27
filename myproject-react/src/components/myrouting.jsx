
//********זה אחרי שינוי לרידקס**************** */

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
import { Shoppingbasket  } from "./shoppingbasket"
import { Completionpurchase } from "./completionpurchase"
import { Personalarea } from "./personalarea"
import { ShowSaleDetaildWind } from "./showSaleDetaildWind"

export const Myrouting = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="moredetails/:gameId" element={<Moredetailes />} />

                {/* ----------- לקוח ---------- */}
                <Route path="shoppingbasket" element={<Shoppingbasket />} />
                <Route path="personalarea" element={<Personalarea />}>
                    <Route path="showSaleDetaildWind/:shoppingId" element={<ShowSaleDetaildWind />} />
                </Route>
                <Route path="completionpurchase" element={<Completionpurchase />} />

                {/* ----------- מנהל ---------- */}
                <Route path="categorys" element={<Categorys />}>
                    <Route path="addcategory" element={<Addcategory />} />
                    <Route path="updatecategory/:categoryId" element={<Updatecategory />} />
                </Route>
                <Route path="games" element={<Games />}>
                    <Route path="addgame" element={<Addgame />} />
                    <Route path="updategame/:gameId" element={<Updategame />} />
                </Route>
            </Routes>
        </div>
    );
}





