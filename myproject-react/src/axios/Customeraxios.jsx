import axios from "axios";

const url="https://localhost:7035/api/customer/"

//מחזיר האם הלקוח נמצא בטבלת לקוחות לפי סיסמה ושם
export const haveThisCustomerReact=(custName,custPassWord)=>{
    return axios.get(`${url}haveCustomer/${custName}/${custPassWord}`)
}


//להוסיף לקוח חדש
export const addCustomerReact=(customer)=>{
    return axios.put(`${url}addCustomer`,customer)
}