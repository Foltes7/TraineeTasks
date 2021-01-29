using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DB_MODELS
{
    public class Order : BaseEntity
    {
        public DateTime CreatedAt { set; get; }
        public string CustomerName { set; get; }
        public string CustomerAddress { set; get; }
        public double Cost { set; get; }
        public Status Status { set; get; }
        public List<Product> Products { set; get; } = new List<Product>();
    }
}
