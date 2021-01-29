using AutoMapper;
using BI.Interfaces;
using Common.DB_MODELS;
using Common.DTO.Categories;
using DAL.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Services
{
    public class CategoriesService: ICategoriesService
    {
        private readonly IMapper mapper;
        private readonly IRepository<ProductCategory> categoryRepository;
        public CategoriesService(IRepository<ProductCategory> categoryRepository, IMapper mapper)
        {
            this.categoryRepository = categoryRepository;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<CategoryDTO>> GetAll()
        {
            var categories = await this.categoryRepository.GetAll();
            return mapper.Map<IEnumerable<CategoryDTO>>(categories);
        }
    }
}
