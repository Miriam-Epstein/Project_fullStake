////********לפני החלפה לרידקס********************* */
import { useState } from "react";
import { updateReactCaterory } from "../axios/Categoryaxios";
import { useLocation, useNavigate } from "react-router-dom";

export const Updatecategory=()=>{
        
    const [item, setitem] = useState({
        "categoryId": 0,
        "categoryName": ""

    })

    
    //משתנים לרענון
    const navigate = useNavigate();
    const location = useLocation();


       const updateGood =async()=>{
                   let y=( await updateReactCaterory(item.categoryId,item)).data;
                   if(y)
                   {
                       alert("עודכן בהצלחה")
                       navigate("/categorys");
                   }
                   else
                   {
                       alert("לא הצליח לעדכן")
                   }
               }

    
        return <div>
           <input className="form-control" type="number" placeholder=" categoryId" onBlur={(e)=>setitem({...item,categoryId:e.target.value})}></input>
           <input className="from-control" type="text" placeholder=" categoryName" onBlur={(e)=>setitem({...item,categoryName:e.target.value})}></input>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
            <button className="btn btn-primary" onClick={()=>{updateGood()}}>save_updateGood  </button>
            </div>
        </div>
}


