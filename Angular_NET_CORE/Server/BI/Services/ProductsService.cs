using AutoMapper;
using BI.Interfaces;
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

        public async Task<FullProductDTO> GetFullProduct(int id)
        {
            var product = await this.productRepository.GetFullProduct(id);
            return mapper.Map<FullProductDTO>(product);
        }

        public async Task<IEnumerable<ProductDTO>> GetTableProducts()
        {
            var products = await this.productRepository.GetAllProducts();
            return mapper.Map<IEnumerable<ProductDTO>>(products);
        }
    }
}
