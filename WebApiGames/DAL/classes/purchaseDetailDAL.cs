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
    public class purchaseDetailDAL : IpurchaseDetailDAL
    {

        //ברוך ה' גמרתי לממש את הממשק
        GameStoreDBContext DB = new GameStoreDBContext();

        public bool Add(PurchaseDetail item)
        {
            //פונקציה שמכניסה למסד נתונים
            try
            {
                DB.PurchaseDetails.Add(item);
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
                PurchaseDetail i = DB.PurchaseDetails.FirstOrDefault(o => o.PurchaseDetailsId == id);
                DB.PurchaseDetails.Remove(i);
                //הולכת ומשנה במסד
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        //שליפת נתונים
        public List<PurchaseDetail> Get()
        {

         //return DB.PurchaseDetails.Include(j => j.PurchaseCodeNavigation).ToList();---אני לא מבינה מה ההבדל
            return DB.PurchaseDetails.ToList();
        }

        public bool Update(PurchaseDetail item, int id)
        {
            try
            {
                DB.PurchaseDetails.FirstOrDefault(i => i.PurchaseDetailsId == id).PurchaseCode = item.PurchaseCode;
                DB.PurchaseDetails.FirstOrDefault(i => i.PurchaseDetailsId == id).GameCode = item.GameCode;
                DB.PurchaseDetails.FirstOrDefault(i => i.PurchaseDetailsId== id).Quantity = item.Quantity;

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
