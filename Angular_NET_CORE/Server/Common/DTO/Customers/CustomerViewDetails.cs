using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTO.Customers
{
    public class CustomerViewDetails
    {
        public int Id { set; get; }
        public DateTime CreatedAt { set; get; }
        public string Name { set; get; }
        public string Address { set; get; }
    }
}
