using BLL.services;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiGames.Controllers
{

   

    [Route("api/[controller]")]
    [ApiController]
    public class categoryController : ControllerBase
    {

        InterfaceCategoryBLL I;
        //שימוש בפונקציות שבשכבה הבל לכן יצרנו מופע מהממשק
        public categoryController(InterfaceCategoryBLL I)
        {
            this.I = I;
        }

        // פונקציה שמחזירה את כל נתוני טבלת קטגוריה
        [HttpGet("Getlist")]

        public List<categoryDTO> getlist()
        {
            return I.GetAll();
        }
        //פונקציה שמחזירה קטגוריה לפי אידי מסוים
        [HttpGet("getcatgory_id/{id}")]
        public categoryDTO get_id(int id)
        {
            return I.getcatgory_id(id);
        }
       //פונקציה שמעדכנת קטגוריה
        [HttpPost("UpdateCategory/{id}")]
        public bool update(int id, categoryDTO category)
        {
            return I.UpdateCategory(id,category);
        }
        //פונקציה שמוחקת קטגוריה
        [HttpDelete("deletCategory/{id}")]
        public bool delete(int id)
        {
            return I.deletCategory(id);
        }
        //להוסיף קטגוריה
        [HttpPut("addCategory")]
        public bool add(categoryDTO category)
        {
            return I.addCategory(category);
        }
    }
}
