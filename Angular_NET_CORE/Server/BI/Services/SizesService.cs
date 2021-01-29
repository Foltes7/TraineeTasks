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
    public class SizesService: ISizesService
    {
        private readonly IRepository<ProductSize> sizeRepository;
        public SizesService(IRepository<ProductSize> sizeRepository)
        {
            this.sizeRepository = sizeRepository;
        }

        public async Task<IEnumerable<ProductSize>> GetAll()
        {
            return await this.sizeRepository.GetAll();
        }
    }
}
