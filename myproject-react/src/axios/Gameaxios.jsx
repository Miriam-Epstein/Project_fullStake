import axios from "axios";  

const url="https://localhost:7035/api/game/"

//שליפת כל המשחקים

export const getReactALlGames =()=>{
    return axios.get(`${url}Getlist`)
}

//פונקציה שמוחקת משחק
export const deleteReactGames=(id)=>{
    return axios.delete(`${url}dellgame/${id}`)
 }
  //פונקציה שמעדכנת משחק
export const updateReactGames=(id,game)=>{
return  axios.post(`${url}updategame/${id}`,game)
}
  //פונקציה שמוסיפה משחק
  export const addReactGames=(game)=>{
    console.log("in axsios",game)
     return axios.put(`${url}addgame`,game)
  }
  //פונקציה ששולפת משחק לפי קטגוריה
  export const getGameReactByCategoryId=(CategoryId)=>{
    //    return axios.get(`${url}GetGameListByCodeCAtegory`,CategoryId)
    return axios.get(`${url}Getgame_category/${CategoryId}`)
}

  //פונקציה ששולפת משחק לפי קוד
  export const getGameReactById=(id)=>{
    return axios.get(`${url}Getgame_ID/${id}`)
    }

    //פונקציה שמעדכנת את כמות המוצר בסל לאחר קנייה
    export const SaveReactAmount=(shoppingBasket)=>{
      return axios.post(`${url}saveAmount`, shoppingBasket)
    }
