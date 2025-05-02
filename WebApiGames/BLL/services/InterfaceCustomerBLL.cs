using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public interface InterfaceCustomerBLL
    {

        //הוספת לקוח
        
        public bool addCustomer(customerDTO customer);

      /*
        // לפני שינוי הפונקציה
        //בדיקה האם לקוח קיים לפי שם וסיסמה
        public bool haveCustomer(string custName, string custPassWord);
      */



        //בדיקה האם לקוח קיים לפי שם וסיסמה  מחזיר מספר לקוח
        public int haveCustomer(string custName, string custPassWord);
    }
}
