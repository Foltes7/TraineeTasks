﻿using BI.Interfaces;
using Common.Commands;
using Common.DB_MODELS;
using Common.DTO.Categories;
using Common.DTO.Products;
using Common.DTO.Sizes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService productsService;
        private readonly ICategoriesService categoriesService;
        private readonly ISizesService sizesService;
        public ProductsController(
            IProductsService productsService, 
            ICategoriesService categoriesService,
            ISizesService sizesService)
        {
            this.productsService = productsService;
            this.categoriesService = categoriesService;
            this.sizesService = sizesService;
        }

        [HttpGet("sizes")]
        public async Task<IEnumerable<SizeDTO>> GetSizes()
        {
            return await this.sizesService.GetAll();
        }

        [HttpGet("categories")]
        public async Task<IEnumerable<CategoryDTO>> GetCagetories()
        {
            return await this.categoriesService.GetAll();
        }

        [HttpGet]
        public async Task<IEnumerable<ProductDTO>> GetTableProducts()
        {
            return await productsService.GetTableProducts();
        }

        [HttpGet("{id}")]
        public async Task<FullProductDTO> GetFullProduct(int id)
        {
            return await productsService.GetFullProduct(id);
        }

        [HttpGet("order/non/{id}")]
        public async Task<IEnumerable<ProductDTO>> GetProductsExceptOrderId(int id)
        {
            return await productsService.GetProductsExceptOrderId(id);
        }

        [HttpPost]
        public async Task<ProductDTO> CreateNewProduct(NewProductCommand command)
        {
            return await productsService.CreateNewProduct(command);
        }

        [HttpDelete("{id}")]
        public async Task RemoveProduct(int id)
        {
            await productsService.RemoveProduct(id);
        }

        [HttpPut]
        public async Task UpdateProduct(UpdateProductCommand command)
        {
            await productsService.UpdateProduct(command);
        }
    }
}
