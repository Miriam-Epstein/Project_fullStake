import axios from "axios";
 
const url="https://localhost:7035/api/category/";

// פונקציה שמחזירה את כל נתוני טבלת קטגוריה
export const getAllReactCategorys=()=>{
    return axios.get(`${url}Getlist`);
}
 //פונקציה שמחזירה קטגוריה לפי אידי מסוים
export const getCategoryReactByCategoryId=(id)=>{
    return axios.get(`${url}getcatgory_id/${id}`)
}
       //פונקציה שמעדכנת קטגוריה
       export const updateReactCaterory=(id,item)=>{
    return axios.post(`${url}UpdateCategory/${id}`,item)
}
        //פונקציה שמוחקת קטגוריה
        export const deleteReactCategory=(id)=>{
    return axios.delete(`${url}deletCategory/${id}`)
}
 //להוסיף קטגוריה
export const addReactCategory=(obj)=>{
    return axios.put(`${url}addCategory`,obj)
}