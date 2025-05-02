using BLL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiGames.Controllers
{

    //*****************************************************************
    //----ברוך ה' כל הפונקציות עובדות ---
    //*****************************************************************

    [Route("api/[controller]")]
    [ApiController]
    public class customerController : ControllerBase
    {

        InterfaceCustomerBLL I;
        public customerController(InterfaceCustomerBLL I) 
        {
            this.I = I;
        }

        // בודק האם לקוח קיים ומחזיר את האידי
        [HttpGet("haveCustomer/{custName}/{custPassWord}")]   
        public int haveCustomer(string custName, string custPassWord)
        {
            return I.haveCustomer(custName, custPassWord);
        }


        //לפני השינוי של הפונקציה
        /*[HttpGet("haveCustomer/{custName}/{custPassWord}")]
        public bool haveCustomer(string custName, string custPassWord)
        {
            return I.haveCustomer(custName, custPassWord);
        }*/


        //מוסיף עוד לקוח

        [HttpPut("addCustomer")]
        public bool add(customerDTO cu)
        {
            return I.addCustomer(cu);
        }
    }
}
