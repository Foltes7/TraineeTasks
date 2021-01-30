using BI.Interfaces;
using Common.Commands;
using Common.DB_MODELS;
using Common.DTO.Orders;
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
        public async Task<IEnumerable<StatusDTO>> GetStatuses()
        {
            return await this.statusService.GetAll();
        }

        [HttpGet]
        public async Task<IEnumerable<OrderDTO>> GetTableOrders()
        {
            return await ordersService.GetTableOrders();
        }

        [HttpGet("{id}")]
        public async Task<FullOrderDTO> GetFullOrder(int id)
        {
            return await ordersService.GetFullOrder(id);
        }


        [HttpPost]
        public async Task<OrderDTO> CreateNewOrder(NewOrderCommand command)
        {
            return await ordersService.CreateNewOrder(command);
        }

        [HttpPut]
        public async Task UpdateOrder(UpdateOrderCommand command)
        {
            await ordersService.UpdateOrder(command);
        }


    }
}
