using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IshoppingDAL
    {

        //הוספה
        public bool Add(Shopping item);
       
        //מחיקה
        public bool Delete(int id);
        //עדכון
        public bool Update(Shopping item, int id);

        //שליפת הנתונים
        List<Shopping> Get(); 


    }
}
