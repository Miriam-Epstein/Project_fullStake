import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getAllReactCategorys, deleteReactCategory } from "../axios/Categoryaxios";
import { setCategoriesAction } from "../redux/actions/categoryActions";
import { FiTrash2, FiEdit, FiPlus, FiTag } from "react-icons/fi";
import "./categorys.css";

export const Categorys = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllReactCategorys();
        if (response?.data) {
          dispatch(setCategoriesAction(response.data));
        }
      } catch (error) {
        console.error("שגיאה בשליפת קטגוריות:", error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק את הקטגוריה הזו?")) {
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
    }
  };

  return (
    <div className="categories-management-container">
      <div className="categories-management-header">
        <h1 className="categories-management-title">🏷️ ניהול קטגוריות</h1>
        <p className="categories-management-subtitle">ניהול כל הקטגוריות במערכת</p>
      </div>

      <Link className="add-category-link" to="/categorys/addcategory">
        <FiPlus /> הוסף קטגוריה חדשה
      </Link>

      <div className="categories-table-container">
        <table className="categories-table">
          <thead>
            <tr>
              <th>קוד</th>
              <th>שם קטגוריה</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="3" className="empty-message">
                  אין קטגוריות במערכת
                </td>
              </tr>
            ) : (
              categories.map(category => (
                <tr key={category.categoryId}>
                  <td className="category-id">{category.categoryId}</td>
                  <td className="category-name">{category.categoryName}</td>
                  <td className="category-actions">
                    <button 
                      className="action-button delete-button"
                      onClick={() => handleDelete(category.categoryId)}
                      title="מחק"
                    >
                      <FiTrash2 />
                    </button>
                    <Link 
                      className="action-button update-button"
                      to={`/categorys/updatecategory/${category.categoryId}`}
                      title="עדכון"
                    >
                      <FiEdit />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Outlet />
    </div>
  );
};













































