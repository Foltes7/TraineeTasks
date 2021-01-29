using Common.DB_MODELS;
using Common.DTO.Status;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTO.Orders
{
    public class OrderDTO
    {
        public int Id { set; get; }
        public OrderCustomerDTO Customer { get; set; }
        public double Cost { set; get; }
        public StatusDTO OrderStatus { set; get; }
    }
}
