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
    public class gameDAL : IgameDAL
    {
        //ברוך ה' גמרנו לממש את ממשק המשחקים

        GameStoreDBContext DB = new GameStoreDBContext();

        //פונקציה שמוסיפה למאגר הנתונים
        public bool Add(Game item)
        {
            try
            {
                DB.Games.Add(item);                     
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
                Game i = DB.Games.FirstOrDefault(o => o.GameId == id);
                DB.Games.Remove(i);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
         // שליפת הנתונים
        public List<Game> Get()
        {
            return DB.Games.Include(j=>j.CategoryCodeNavigation).ToList();
        }
        //עדכון הנתונים של טבלת משחקים
        public bool Update(Game item, int id)
        {
            try
            {
               /* DB.Games.FirstOrDefault(i => i.GameId == id).ProductName = item.ProductName;
                DB.Games.FirstOrDefault(i => i.GameId == id).CategoryCode = item.CategoryCode;
                DB.Games.FirstOrDefault(i => i.GameId == id).Picture = item.Picture;
                DB.Games.FirstOrDefault(i => i.GameId == id).QuantityInStock = item.QuantityInStock;*/
               
                //פונקציה שמעדכנת את כל האוביקט
                Game c1 = DB.Games.FirstOrDefault(o => o.GameId == id);
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
//*********************************************
//עמוד זה ממש את הממשק של טבלת משחקים בשכבת הדל
//*********************************************