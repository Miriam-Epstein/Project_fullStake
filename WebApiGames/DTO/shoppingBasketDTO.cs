using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class shoppingBasketDTO
    {
        //מחלקת סל קניות 
        public shoppingBasketDTO()
        {
            TotsalEmount = Quantity * (int?)Price;
        }
        public virtual int GameId { get; set; }
        public virtual  string? ProductName { get; set; } 
        public   int Quantity { get; set; }
        public  decimal Price { get; set; }
        public int? TotsalEmount { get; }




    }
}

// אופציה ללא משנה וירטואל
//public virtual int GameId { get; set; }
//public virtual string? ProductName { get; set; }
//public int Quantity { get; set; }
//public virtual decimal Price { get; set; }
//public int? TotsalEmount { get; }