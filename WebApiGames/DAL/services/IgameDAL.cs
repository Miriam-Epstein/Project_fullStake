using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface IgameDAL
    {

        //שליפת הנתונים
        public List<Game> Get();

        //הוספה
        public bool Add(Game item);
        //מחיקה
        public bool Delete(int id);
        //עדכון
        public bool Update(  Game item, int id);
        


    }
}
