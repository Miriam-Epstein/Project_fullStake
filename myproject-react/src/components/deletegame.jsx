import { useEffect, useState } from "react"
import { deleteReactGames } from "../axios/Gameaxios";
import { useParams } from "react-router-dom";

export const Deletegame=()=>{

     useEffect(()=>{
               deletGood()
           },[])
   
           let myparams=useParams();
           
           const [item,setitem]=useState(false)
   
           const deletGood=async()=>{
               if(item===false)
              {
               let y=(await  deleteReactGames(myparams.id)).data
               if(y)
               {
                   alert("המשחק נמחק בהצלחה")
                   setitem(true)
               }
              }
              else            
              {
                  alert("המשחק לא נמחק")
              }
       }
       return <div>
        <h3>********deletgame*********</h3>
       </div>
}