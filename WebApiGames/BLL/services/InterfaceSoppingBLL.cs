using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public interface InterfaceSoppingBLL
    {

        //שמירת של סל קניות
        public int saveShopping(int customerId, List<shoppingBasketDTO> listshoppingBasketDTO);

        //הצגת כל הפרטים שבטבל קניות
        public List<ShoppingDTO> getShoppingList();

        //הוספה
        public bool Addshopping(ShoppingDTO shopping);

        //פונקציה השולפת את כל הקניות של לקוח מסוים
        public List<ShoppingDTO>  getShoppingcustomer( int customerId);
        
    }
}
