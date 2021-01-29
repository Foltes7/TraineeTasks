using AutoMapper;
using Common.Commands;
using Common.DB_MODELS;
using Common.DTO.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProfilesForMapping
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<NewProductCommand, Product>();
            CreateMap<Product, FullProductDTO>();
            CreateMap<Product, ProductDTO>();
        }
    }
}
