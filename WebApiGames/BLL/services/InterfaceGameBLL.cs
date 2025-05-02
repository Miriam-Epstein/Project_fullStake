using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public interface InterfaceGameBLL
    {

        //   שליפת רשימה המכילה את כל המשחקים
        public List<gameDTO> GetAll();
        
       //שליפת משחק לפי קוד
        public gameDTO Getgame_ID(int id);
        //הוספה לרשימה
        public bool addgame(gameDTO item);
       
        //עדכון משחק ברשימה
        public bool updgame(int id, gameDTO item);

        //הסרת משחק מהרשימה
        public bool dell(int id);

        //שליפת משחק לפי קטגוריה מבוקשת
        public List<gameDTO> Getgame_category(int category);
        //עדכון כמות המוצרים בחנות
        public bool saveEmount(List<shoppingBasketDTO> Sp);




    }
}
