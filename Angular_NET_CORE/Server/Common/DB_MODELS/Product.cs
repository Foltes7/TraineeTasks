using System;
using System.Collections.Generic;

namespace Common.DB_MODELS
{
    public class Product : BaseEntity
    {
        public int Quantity { set; get; }
        public double Price { set; get; }
        public string Name { set; get; }
        public DateTime CreatedAt { set; get; }
        public List<Order> Orders { set; get; } = new List<Order>();
        public int ProductSizeId { set; get; }
        public ProductSize ProductSize { set; get; }
        public int ProductCategoryId { set; get; }
        public ProductCategory ProductCategory { set; get; }
    }
}
