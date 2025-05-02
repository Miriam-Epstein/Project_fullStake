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
    public class customerDAL : IcustomerDAL
    {

        //ברוך ה' גמרנו לממש
        GameStoreDBContext DB = new GameStoreDBContext();

        public bool Add(Customer item)
        {
            //פונקציה שמכניסה למסד נתונים
            try
            {
                DB.Customers.Add(item);
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
                //מציאת האוביקט למחיקה
                Customer i = DB.Customers.FirstOrDefault(o => o.CustomerId == id);
                DB.Customers.Remove(i);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }

        public List<Customer> Get()
        {
           return DB.Customers.Include(e => e.Shoppings).ToList();   
        }

        public bool Update(Customer item, int id)
        {
            try
            {
                DB.Customers.FirstOrDefault(i => i.CustomerId == id).Name = item.Name;
                DB.Customers.FirstOrDefault(i => i.CustomerId == id).Password= item.Password;
                DB.Customers.FirstOrDefault(i => i.CustomerId == id).CreditInfo = item.CreditInfo;

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
