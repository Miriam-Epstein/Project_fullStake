using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

//***************************************************************************************************
//בסוף שינתי את הממשקים שבשכבת הדל ובניתי לכל מחלקה ממשק בנפרד לא השתמשתי בג'נרי שמא חלילה יוצר בעיות
//***************************************************************************************************

namespace DAL.services
{
    public interface InterfacGeneric <T> 
    {


        //הוספה
        public bool Add(T item);
        //מחיקה
        public  bool Delete(int id);
        //עדכון
        public bool Update(T item, int id);
        List<T> GetAll(); //שליפת הנתונים

        


        




    }
}
