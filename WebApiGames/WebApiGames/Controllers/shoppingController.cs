using BLL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiGames.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class shoppingController : ControllerBase
    {

        InterfaceSoppingBLL I;

        public shoppingController(InterfaceSoppingBLL i)
        {
            I = i;
        }

        //שמירה
        [HttpPut("save/{customerId}")]
        public int Save(int customerId, List<shoppingBasketDTO> listshoppingBasketDTO)
        {
            return I.saveShopping(customerId, listshoppingBasketDTO);
        }

        //שליפת הנתונים
        [HttpGet("GetShopping")]

        public List<ShoppingDTO> Get()
        {

            return I.getShoppingList();
        }

        //הוספת נתונים
        [HttpPut("AddShopping")]
        public bool Add(ShoppingDTO shopping)
        {
            return I.Addshopping(shopping);
        }

        //שליפת כל הקניות ללקוח מסוים
        [HttpGet("getBuysByCustId/{customerId}")]

        public List<ShoppingDTO> getBuysByCustId( int customerId)
        {
            return I.getShoppingcustomer(customerId);
        }

    }
}
