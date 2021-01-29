﻿using Common.DB_MODELS;
using Common.DTO.Categories;
using Common.DTO.Sizes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTO.Products
{
    public class ProductDTO
    {
        public int Id { set; get; }
        public int Quantity { set; get; }
        public double Price { set; get; }
        public string Name { set; get; }
        public SizeDTO ProductSize { set; get; }
        public CategoryDTO ProductCategory { set; get; }
    }
}
