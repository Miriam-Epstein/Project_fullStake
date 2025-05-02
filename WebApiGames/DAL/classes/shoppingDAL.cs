using DAL.models;
using DAL.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DAL.classes
{
    public class shoppingDAL : IshoppingDAL
    {

        //ברוך ה' הממשק מומש

        GameStoreDBContext DB = new GameStoreDBContext();

        public bool Add(Shopping item)
        {
            //פונקציה שמכניסה למסד נתונים
            try
            {
                DB.Shoppings.Add(item);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }

            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                ///מציאת האונביקט למחיקה
                Shopping i = DB.Shoppings.FirstOrDefault(o => o.ShoppingId == id);
                DB.Shoppings.Remove(i);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }

        public List<Shopping> Get()
        {
            return DB.Shoppings.Include(j => j.CustomerCodeNavigation).ToList();
        }

        public bool Update(Shopping item, int id)
        {
            try
            {
                DB.Shoppings.FirstOrDefault(i => i.ShoppingId == id).CustomerCode = item.CustomerCode;
                DB.Shoppings.FirstOrDefault(i => i.ShoppingId == id).Date = item.Date;
                DB.Shoppings.FirstOrDefault(i => i.ShoppingId == id).Amount = item.Amount;  

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
