using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class PurchaseDetail
    {
        public int PurchaseDetailsId { get; set; }
        public int PurchaseCode { get; set; }
        public int GameCode { get; set; }
        public int Quantity { get; set; }

        public virtual Game GameCodeNavigation { get; set; } = null!;
        public virtual Shopping PurchaseCodeNavigation { get; set; } = null!;
    }
}
