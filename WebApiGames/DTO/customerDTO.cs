using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class customerDTO
    {
        public int CustomerId { get; set; }
        public string? Name { get; set; } = null!;
        public string? Password { get; set; } = null!;
        public string? CreditInfo { get; set; } = null!;
    }
}
