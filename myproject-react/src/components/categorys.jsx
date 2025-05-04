

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getAllReactCategorys, deleteReactCategory } from "../axios/Categoryaxios";
import { setCategoriesAction } from "../redux/actions/categoryActions";

export const Categorys = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Attempting to fetch categories...");
        const response = await getAllReactCategorys();
        console.log("Response from API:", response); // הודעה זו תראה את התגובה
        if (response?.data) {
          console.log("Fetched categories:", response.data);
          dispatch(setCategoriesAction(response.data));
        }
      } catch (error) {
        console.error("שגיאה בשליפת קטגוריות:", error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const response = await deleteReactCategory(id);
      if (response?.data) {
        alert("הקטגוריה נמחקה בהצלחה");
        const updated = categories.filter(c => c.categoryId !== id);
        dispatch(setCategoriesAction(updated));
      }
    } catch (error) {
      alert("שגיאה במחיקת הקטגוריה");
    }
  };

  return (
    <div className="container mt-4">
      <table className="table table-bordered text-center mt-5">
        <thead>
          <tr>
            <th>categoryId</th>
            <th>categoryName</th>
            <th>אפשרויות</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.categoryId}>
              <td>{category.categoryId}</td>
              <td>{category.categoryName}</td>
              <td>
                <button onClick={() => handleDelete(category.categoryId)}>🗑️</button>
                <Link to={`/categorys/updatecategory/${category.categoryId}`}>🔄</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="btn btn-outline-dark" to={`/categorys/addcategory`}>
        add_newCategory
      </Link>

      <Outlet />
    </div>
  );
};













































