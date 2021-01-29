using AutoMapper;
using BI.Interfaces;
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
    }
}
