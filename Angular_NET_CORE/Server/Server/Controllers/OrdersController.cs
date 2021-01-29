using BI.Interfaces;
using Common.DB_MODELS;
using Common.DTO.Status;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrdersService ordersService;
        private readonly IStatusService statusService;
        public OrdersController(IOrdersService ordersService, IStatusService statusService)
        {
            this.ordersService = ordersService;
            this.statusService = statusService;
        }

        [HttpGet("status")]
        public async Task<IEnumerable<StatusDTO>> GetSizes()
        {
            return await this.statusService.GetAll();
        }
    }
}
