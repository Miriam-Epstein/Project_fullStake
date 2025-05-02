import { useState } from "react";
import { updateReactGames } from "../axios/Gameaxios";


export const Updategame=()=>{

    const [item,setitem]=useState({
        "gameId": 0,
        "productName": "string",
        "categoryCode": 0,
        "price": 0,
        "picture": "string",
        "quantityInStock": 0 
        })
    
        
          const updateGood =async()=>{
            let y=( await updateReactGames(item.gameId,item)).data;
            if(y)
                alert("עודכן בהצלחה")
            else
                alert("לא הצליח לעדכן")
        }


        //-----------------החזרה בעיצוב  או --------------
            return<div>
             <br></br>
            <input className="input" type={'number'}placeholder={' gameId'}onBlur={(e)=>setitem({...item,gameId:e.target.value})}></input>
            <input className="input" type={'text'}placeholder={'productName'}onBlur={(e)=>setitem({...item,productName:e.target.value})}></input>
            <input className="input" type={'number'}placeholder={' categoryCode'}onBlur={(e)=>setitem({...item,categoryCode:e.target.value})}></input>
            <input className="input" type={'number'}placeholder={' picture'}onBlur={(e)=>setitem({...item,picture:e.target.value})}></input>
            <input className="input" type={'text'}placeholder={' gameImg'}onBlur={(e)=>setitem({...item,gameImg:e.target.value})}></input>
            <input className="input" type={'number'}placeholder={' quantityInStock'}onBlur={(e)=>setitem({...item,quantityInStock:e.target.value})}></input>
             <br></br>
            <button className="btn btn-primary" onClick={()=>{updateGood()}}>  save_updateGood  </button>

           <br></br>

         </div>
   
}

































//-----------לפי תמר צריך לקחת בוסטרפים כרגע נעזוב---------------
// return(
//     <div>
       
//    {/* <InputGroup onBlur={(e)=>setCurentU({...curentuser,name:e.target.value})}placeholder='name'></InputGroup><br></br>  */}
//    {/* <InputGroup type={'password'}onBlur={(e)=>setCurentU({...curentuser,password:e.target.value})}placeholder='password'></InputGroup> */}
//    <InputGroup className="mb-3">
//     <InputGroup.Text id="basic-addon1">😁</InputGroup.Text>
//     <Form.Control
//      onBlur={(e)=>setitem({...item,gameId:e.target.value})} 
//        placeholder="gameId"
//       aria-label="gameId"
//       aria-describedby="basic-addon1"
//     />
//            <InputGroup.Text id="basic-addon1">😃</InputGroup.Text>
//     <Form.Control
//     onBlur={(e)=>setitem({...item,productName:e.target.value})} 
//      placeholder="productName"
//       aria-label="productName"
//       aria-describedby="basic-addon1"
//     />
//                <InputGroup.Text id="basic-addon1">😑</InputGroup.Text>
//     <Form.Control
//     onBlur={(e)=>setitem({...item,categoryCode:e.target.value})}  
//     placeholder="categoryCode"
//       aria-label="categoryCode"
//       aria-describedby="basic-addon1"
//     />
//                <InputGroup.Text id="basic-addon1">🤣</InputGroup.Text>
//     <Form.Control
//     onBlur={(e)=>setitem({...item,price:e.target.value})}  
//     placeholder="price"
//       aria-label="price"
//       aria-describedby="basic-addon1"
//     />
//                     <InputGroup.Text id="basic-addon1">😚</InputGroup.Text>
//     <Form.Control
//      onBlur={(e)=>setitem({...item,quantityInStock:e.target.value})}   
//       placeholder="gameAmount"
//       aria-label="gameAmount"
//       aria-describedby="basic-addon1"
//     />
//                            <InputGroup.Text id="basic-addon1">🥰</InputGroup.Text>
//     <Form.Control
//      onBlur={(e)=>setitem({...item,picture:e.target.value})} 
//       placeholder="picture"
//       aria-label="picture"
//       aria-describedby="basic-addon1"
//     />
//   </InputGroup>
            
  
//     <Button variant="info" inclick={()=>updateGood(item.gameId,item)}>OK</Button>
//    </div>   
// )
