using AutoMapper;
using BI.Interfaces;
using Common.Commands;
using Common.DB_MODELS;
using Common.DTO.Products;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Services
{
    public class ProductsService: IProductsService
    {
        private readonly IMapper mapper;
        private readonly IProductRepository productRepository;
        public ProductsService(IProductRepository productRepository, IMapper mapper)
        {
            this.productRepository = productRepository;
            this.mapper = mapper;
        }

        public async Task<ProductDTO> CreateNewProduct(NewProductCommand command)
        {
            var product = mapper.Map<Product>(command);
            product.CreatedAt = DateTime.Now;
            await productRepository.Add(product);
            var newProduct = await this.productRepository.GetFullProduct(product.Id);
            return mapper.Map<ProductDTO>(newProduct);
        }

        public async Task<FullProductDTO> GetFullProduct(int id)
        {
            var product = await this.productRepository.GetFullProduct(id);
            return mapper.Map<FullProductDTO>(product);
        }

        public async Task<IEnumerable<ProductDTO>> GetTableProducts()
        {
            var products = await this.productRepository.GetAllProducts();
            var mappedProducts = mapper.Map<IEnumerable<ProductDTO>>(products);
            return mappedProducts;
        }

        public async Task RemoveProduct(int id)
        {
            var entity = await productRepository.GetById(id);
            if(entity != null)
            {
                await this.productRepository.Remove(entity);
            }
        }
    }
}
