using Common.DB_MODELS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTO.Products
{
    public class FullProductDTO
    {
        public int Id { set; get; }
        public string Description { set; get; }
        public int Quantity { set; get; }
        public double Price { set; get; }
        public string Name { set; get; }
        public DateTime CreatedAt { set; get; }
        public ProductSize ProductSize { set; get; }
        public ProductCategory ProductCategory { set; get; }
    }
}
