import axios from "axios";

const url="https://localhost:7035/api/shopping/";
 
//שליפה של כל נתוני טבל קניות
export const GetAllShopping_Axios = () => {
    return  axios.get(`${url}GetShopping`);
}

// שמירה של קניה
export const SaveCart_Shopping_Axios = (customerId, listshoppingSal) => {
    debugger
    console.log("in axsios shoping")
    return axios.put(`${url}save/${customerId}`, listshoppingSal);
}


//פונקציה שמחזירה את כל הקניות של בנ"א מסוים 
   //הוספתי אותה בשביל דף פרטיים אישיים
   export const GetBuys=(custId)=>{
    return axios.get(`${url}getBuysByCustId/${custId}`,custId)
 }


 