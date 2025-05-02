import { useEffect, useState } from "react";
import { deleteReactCategory } from "../axios/Categoryaxios";
import { useParams } from "react-router-dom";

export const Deletecategory=()=>{

        useEffect(()=>{
            deletGood()
        },[])

        let myparams=useParams();
        
        const [item,setitem]=useState(false)

        const deletGood=async()=>{
            if(item===false)
           {
            let y=(await deleteReactCategory(myparams.id)).data
            if(y)
            {
                alert("הקטגוריה נמחקה בהצלחה")
                setitem(true)
            }
           }
           else            
           {
               alert("הקטגוריה לא נמחקה")
           }
    }
    return <div> 
        <h3>***********deletcategory********</h3>
    </div>
}
