using AutoMapper;
using BI.Interfaces;
using Common.DB_MODELS;
using Common.DTO.Sizes;
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
        private readonly IMapper mapper;
        private readonly IRepository<ProductSize> sizeRepository;
        public SizesService(IRepository<ProductSize> sizeRepository, IMapper mapper)
        {
            this.sizeRepository = sizeRepository;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<SizeDTO>> GetAll()
        {
            var sizes = await this.sizeRepository.GetAll();
            return mapper.Map<IEnumerable<SizeDTO>>(sizes);
        }
    }
}
