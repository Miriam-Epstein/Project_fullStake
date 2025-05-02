using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class categoryDTO
    {
        //מעתיקים את התכונות מהמודל שבשכבת הדל
        //וכמובן שהפלוס המיוחד שאפשר להוסיף משתנים כרצוני הטוב
        //כמובן שללא קשרי הגומלין
        //ונכתוב באותיות קטנות את המשתנים שהוספנו


        public int CategoryId { get; set; }// מזהה קטגוריה
        public string? CategoryName { get; set; } = null!;//שם קטגוריה


    }
}
