using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShoppingDTO
    {
        public int ShoppingId { get; set; }
        public int? CustomerCode { get; set; }
        public DateTime? Date { get; set; }
        public decimal? Amount { get; set; }

    }
}
