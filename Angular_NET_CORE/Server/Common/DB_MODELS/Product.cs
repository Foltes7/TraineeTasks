using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DB_MODELS
{
    public class Product : BaseEntity
    {
        public int Quantity { set; get; }
        public double Price { set; get; }
        public string Category { set; get; }
        public string Name { set; get; }
        public DateTime CreatedAt { set; get; }
        public int OrderId { get; set; }
        public Order Order { get; set; } 
        public Size Size { set; get; }
    }
}
