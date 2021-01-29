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
    public class StatusService: IStatusService
    {
        private readonly IRepository<OrderStatus> orderStatusRepository;
        public StatusService(IRepository<OrderStatus> orderStatusRepository)
        {
            this.orderStatusRepository = orderStatusRepository;
        }

        public async Task<IEnumerable<OrderStatus>> GetAll()
        {
            return await this.orderStatusRepository.GetAll();
        }
    }
}
