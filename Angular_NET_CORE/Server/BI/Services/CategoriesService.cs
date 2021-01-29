using AutoMapper;
using BI.Interfaces;
using Common.DB_MODELS;
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
        private readonly IRepository<ProductCategory> categoryRepository;
        public CategoriesService(IRepository<ProductCategory> categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        public async Task<IEnumerable<ProductCategory>> GetAll()
        {
            return await this.categoryRepository.GetAll();
        }
    }
}
