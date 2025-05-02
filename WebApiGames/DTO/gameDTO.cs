using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class gameDTO
    {
        //מעתיקים את התכונות מהמודל שבשכבת הדל
        //וכמובן שהפלוס המיוחד שאפשר להוסיף משתנים כרצוני הטוב
        //כמובן שללא קשרי הגומלין
        //ונכתוב באותיות קטנות את המשתנים שהוספנו


        public string? barcod { get; set; }//הוספת משנה של ברקוד לכל משחק
        public int GameId { get; set; }
        public string?  ProductName { get; set; } = null!;
        public int? CategoryCode { get; set; }
        public string? nameCategory { get; set; }//הוספת משתנה של שם קטגוריה
        public decimal?  Price { get; set; }
        public string? Picture { get; set; }
        public int? QuantityInStock { get; set; }

    }
}
