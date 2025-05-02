using BLL.services;
using DAL.models;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiGames.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class purchaseDetailController : ControllerBase
    {


        InterfacePurchaseDetailBLL I;
        //שימוש בפונקציות שבשכבה הבל לכן יצרנו מופע מהממשק
        public purchaseDetailController(InterfacePurchaseDetailBLL I)
        {
            this.I = I;
        }

        //שליפת הנתונים
        [HttpGet("getDetails")]

        public List<purchaseDetailDTO> Get()
        {
             return I.GetAlldetails();  
        }
        //הוספת נתון
        [HttpPut("addDetails")]
        public  bool Add(purchaseDetailDTO pd)
        {
            return I.Adddetails(pd);

        }
        //שמירת נתונים

        [HttpPut("Save_shoppingBasct_details/{purchaseId}")]
        public bool Save_shoppingBasct_details(int purchaseId,List<shoppingBasketDTO> listshoppingBasketDTO)
        {
           
            return I.SaveShoppingBasket_Details(purchaseId, listshoppingBasketDTO);
        }


        // מחזירה את כל פרטי הקניה של קניה מסוימת

        [HttpGet("getSaleDetailByshoppingId/{shoppingId}")]

        public List<purchaseDetailDTO> GetSaleDetailByshoppingId(int shoppingId)
        {

            return I.GetSaleDetailByshoppingId(shoppingId);
        }

    }
}
