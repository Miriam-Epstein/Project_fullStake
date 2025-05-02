using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class Game
    {
        public Game()
        {
            PurchaseDetails = new HashSet<PurchaseDetail>();
        }

        public int GameId { get; set; }
        public string ProductName { get; set; } = null!;
        public int CategoryCode { get; set; }
        public decimal Price { get; set; }
        public string? Picture { get; set; }
        public int QuantityInStock { get; set; }

        public virtual Category CategoryCodeNavigation { get; set; } = null!;
        public virtual ICollection<PurchaseDetail> PurchaseDetails { get; set; }
    }
}
