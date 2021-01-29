using Common.DB_MODELS;
using Common.DTO.Products;
using Common.DTO.Status;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTO.Orders
{
    public class FullOrderDTO
    {
        public int Id { set; get; }
        public DateTime CreatedAt { set; get; }
        public int CustomerId { get; set; }
        public double Cost { set; get; }
        public string Description { set; get; }
        public int OrderStatusId { set; get; }
        public List<ProductDTO> Products { set; get; } = new List<ProductDTO>();
    }
}
