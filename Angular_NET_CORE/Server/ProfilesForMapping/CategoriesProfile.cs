using AutoMapper;
using Common.DB_MODELS;
using Common.DTO.Categories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfilesForMapping
{
    public class CategoriesProfile : Profile
    {
        public CategoriesProfile()
        {
            CreateMap<ProductCategory, CategoryDTO>();
        }
    }
}
