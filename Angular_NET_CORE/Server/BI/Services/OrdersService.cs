using AutoMapper;
using BI.Interfaces;
using Common.DTO.Orders;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Services
{
    public class OrdersService: IOrdersService
    {
        private readonly IMapper mapper;
        private readonly IOrderRepository orderRepository;
        public OrdersService(IOrderRepository orderRepository, IMapper mapper)
        {
            this.orderRepository = orderRepository;
            this.mapper = mapper;
        }

        public async Task<FullOrderDTO> GetFullOrder(int id)
        {
            var order = await this.orderRepository.GetFullOrder(id);
            return mapper.Map<FullOrderDTO>(order);
        }

        public async Task<IEnumerable<OrderDTO>> GetTableOrders()
        {
            var orders = await this.orderRepository.GetAllOrders();
            return mapper.Map<IEnumerable<OrderDTO>>(orders);
        }
    }
}
