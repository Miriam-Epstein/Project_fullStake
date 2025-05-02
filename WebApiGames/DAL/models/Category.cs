using DAL.services;
using System;
using System.Collections.Generic;

namespace DAL.models
{
    public partial class Category 
    {
        public Category()
        {
            Games = new HashSet<Game>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = null!;

        public virtual ICollection<Game> Games { get; set; }

    }

}
