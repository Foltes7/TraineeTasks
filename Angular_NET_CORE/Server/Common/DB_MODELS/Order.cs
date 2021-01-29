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
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public double Cost { set; get; }
        public int OrderStatusId { set; get; }
        public OrderStatus OrderStatus { set; get; }
        public List<Product> Products { set; get; } = new List<Product>();
    }
}
