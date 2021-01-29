﻿using Common.DTO.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Interfaces
{
    public interface IProductsService
    {
        Task<IEnumerable<ProductDTO>> GetTableProducts();
        Task<FullProductDTO> GetFullProduct(int id);
    }
}
