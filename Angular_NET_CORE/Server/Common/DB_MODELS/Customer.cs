using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DB_MODELS
{
    public class Customer : BaseEntity
    {
        public DateTime CreatedAt { set; get; }
        public string Name { set; get; }
        public string Address { set; get; }
        public List<Order> Orders { set; get; } = new List<Order>();
    }
}
