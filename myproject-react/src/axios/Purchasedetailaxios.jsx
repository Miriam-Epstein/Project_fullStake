import axios from "axios";

const url="https://localhost:7035/api/purchaseDetail/";

//שמירת פרטי קניה
export const saveCart_ShoppingDetails_Axios = (purchaseId, listshoppingSal) => {
    return axios.put(`${url}Save_shoppingBasct_details/${purchaseId}`, listshoppingSal);
}

//שליפת הנתונים
 export const getDetails_Axios = ()=>{
    return axios.get(`${url}getDetails`);
 }

//הוספת נתונים
export const addDetails_Axios = (pd)=>{
   debugger
   console.log("in addDetails_Axios ")
   return axios.put(`${url}addDetails`,pd)
}


////פונקציה שמחזירה את כל פרטי קניה של קניה מסוימת 
   //הוספתי אותה בשביל דף פרטיים אישיים

   export const getSaleDetailByshoppingId=(shoppingId)=>{
      return axios.get(`${url}getSaleDetailByshoppingId/${shoppingId}`,shoppingId);
   
   }