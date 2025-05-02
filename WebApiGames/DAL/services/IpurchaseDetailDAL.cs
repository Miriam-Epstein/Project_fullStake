using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IpurchaseDetailDAL
    {


        //שליפת הנתונים
        List<PurchaseDetail> Get();


        //הוספה
        public bool Add(PurchaseDetail item);
        //מחיקה
        public bool Delete(int id);
        //עדכון
        public bool Update(PurchaseDetail item, int id);
        


    }
}
