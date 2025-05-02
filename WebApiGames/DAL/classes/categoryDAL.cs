using DAL.models;
using DAL.services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class categoryDAL : IcategoryDAL
    {

        //ברוך ה' גמרתי לממש את קטגוריה
        GameStoreDBContext DB = new GameStoreDBContext();

        //פונקציה שמכניסה למסד נתונים
        public bool Add(Category item)
        {
            try
            {
                DB.Categories.Add(item);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }

            catch
            {
                return false;
            }
        }
        //פונקצית מחיקה
        public bool Delete(int id)
        {
            try
            {
                //מציאת האוביקט למחיקה
                Category i = DB.Categories.FirstOrDefault(o => o.CategoryId== id);
                DB.Categories.Remove(i);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        //שליפת הנתנונים  
        public List<Category> Get()
        {
            //?????????????????????????????**************??????????????????
            //return DB.Categories.Include(j=>j.Games).ToList();
            return DB.Categories.ToList();
        }

        public bool Update(int id, Category item)
        {
            try
            {
                Category c1 = DB.Categories.FirstOrDefault(o => o.CategoryId == id);
                DB.Entry(c1).CurrentValues.SetValues(item);

                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

       
    }
}
