import { useState } from "react";
import { addReactCategory } from "../axios/Categoryaxios";

export const  Addcategory =()=>{

    const [item, setitem] = useState({
        "categoryId": 0,
        "categoryName": ""

    })

    

    const addGood=async()=>{
        let y=(await addReactCategory(item)).data
        if(y)
        {
            alert(" הקטגוריה נוספה בהצלחה")
            
        }
        else
        {
            alert("אוי הקטגוריה לא נוספה נכשל")
        }
    }

    return <div>
        <input className="form-control" type="number" placeholder=" categoryId" onBlur={(e)=>setitem({...item,categoryId:e.target.value})}></input>
        <input className="from-control" type="text" placeholder=" categoryName" onBlur={(e)=>setitem({...item,categoryName:e.target.value})}></input>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
        <button className="btn btn-primary" onClick={()=>{addGood()}}> save_addCategory </button>
        </div>
    </div>
    

}


