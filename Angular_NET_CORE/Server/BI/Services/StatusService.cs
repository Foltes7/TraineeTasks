using AutoMapper;
using BI.Interfaces;
using Common.DB_MODELS;
using Common.DTO.Status;
using DAL.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Services
{
    public class StatusService: IStatusService
    {
        private readonly IMapper mapper;
        private readonly IRepository<OrderStatus> orderStatusRepository;
        public StatusService(IRepository<OrderStatus> orderStatusRepository, IMapper mapper)
        {
            this.orderStatusRepository = orderStatusRepository;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<StatusDTO>> GetAll()
        {
            var statuses = await this.orderStatusRepository.GetAll();
            return mapper.Map<IEnumerable<StatusDTO>>(statuses);
        }
    }
}
