using DTO; 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public interface InterfacePurchaseDetailBLL
    {

        // שליפה - של פרטי קניה
        public List<purchaseDetailDTO> GetAlldetails();

        // הוספה - של פרטי קניה
        public bool Adddetails(purchaseDetailDTO purchaseDetail);

        // שמירה - של סל קניות
        public bool SaveShoppingBasket_Details(int purchaseId, List<shoppingBasketDTO> listshoppingBasketDTO);



        // מחזירה את כל פרטי הקניה של קניה מסוימת
       public List<purchaseDetailDTO> GetSaleDetailByshoppingId(int shoppingId);
       



    }     
}