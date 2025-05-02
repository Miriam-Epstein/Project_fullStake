using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class Customer
    {
        public Customer()
        {
            Shoppings = new HashSet<Shopping>();
        }

        public int CustomerId { get; set; }
        public string Name { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string CreditInfo { get; set; } = null!;

        public virtual ICollection<Shopping> Shoppings { get; set; }
    }
}
