using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IcategoryDAL
    {
        //שליפת הנתונים
        List<Category> Get(); 
        //הוספה
        public bool Add(Category item);
        //מחיקה
        public bool Delete(int id);
        //עדכון
        public bool Update(int id,Category item);
       


    }
}
