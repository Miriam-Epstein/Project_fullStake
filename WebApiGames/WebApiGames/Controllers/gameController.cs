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
    public class gameController : ControllerBase
    {

        InterfaceGameBLL I;
       //שימוש בפונקציות שבשכבה הבל לכן יצרנו מופע מהממשק
        public gameController(InterfaceGameBLL I)
        {
            this.I = I;
        }
        
        //פונקציה המחזירת רשימת משחקים
        [HttpGet("Getlist")]

        public List<gameDTO> getlist()
        {
            return I.GetAll();
        }

        //פונקציה שמוחקת משחק

        [HttpDelete("dellgame/{id}")]
        public bool dell(int id)
        {
            return I.dell(id);
        }

        //פונקציה שמעדכנת משחק

        [HttpPost("updategame/{id}")]
        public bool dell(int id, gameDTO i)
        {
            return I.updgame(id, i);
        }

        //פונקציה שמוסיפה משחק
        [HttpPut("addgame")]
        public bool add(gameDTO item)
        {
            return I.addgame(item);
        }

        //פונקציה ששולפת משחק לפי קטגוריה
        [HttpGet("Getgame_category")]
        public List<gameDTO> Getgame_category(int category)
        {
            return I.Getgame_category(category);
        }
       
        //פונקציה ששולפת משחק לפי קוד
        [HttpGet("Getgame_ID/{id}")]
        public gameDTO get(int id)
        {
            return I.Getgame_ID(id);
        }


        //פונקציה שמעדכנת את כמות בסל לאחר קנייה
        [HttpPost("saveAmount")]
        public bool saveEmount(List<shoppingBasketDTO> Sp)
        {
            return I.saveEmount(Sp);
        }

    }
}
