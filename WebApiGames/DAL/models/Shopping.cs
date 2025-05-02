using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class Shopping
    {
        public Shopping()
        {
            PurchaseDetails = new HashSet<PurchaseDetail>();
        }

        public int ShoppingId { get; set; }
        public int CustomerCode { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }

        public virtual Customer CustomerCodeNavigation { get; set; } = null!;
        public virtual ICollection<PurchaseDetail> PurchaseDetails { get; set; }
    }
}
