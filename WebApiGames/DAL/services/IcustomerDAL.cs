using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IcustomerDAL
    {

        //הוספה
        public bool Add(Customer item);
        //מחיקה
        public bool Delete(int id);
        //עדכון
        public bool Update(Customer item, int id);
       
        //שליפת הנתונים
        List<Customer> Get(); 


    }
}
