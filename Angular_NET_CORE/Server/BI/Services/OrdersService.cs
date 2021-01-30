using AutoMapper;
using BI.Interfaces;
using Common.Commands;
using Common.DB_MODELS;
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
        private readonly IProductRepository productRepository; 
        public OrdersService(IOrderRepository orderRepository, IMapper mapper, IProductRepository productRepository)
        {
            this.orderRepository = orderRepository;
            this.mapper = mapper;
            this.productRepository = productRepository;
        }

        public async Task<FullOrderDTO> GetFullOrder(int id)
        {
            var order = await this.orderRepository.GetFullOrder(id);
            var resultOrder = mapper.Map<FullOrderDTO>(order);
            resultOrder.Cost = order.Products.Sum(x => x.Price);
            return resultOrder;
        }

        public async Task<IEnumerable<OrderDTO>> GetTableOrders()
        {
            var resutList = new List<OrderDTO>();
            var orders = await this.orderRepository.GetAllOrders();
            foreach(var order in orders)
            {
                var mapOrder = mapper.Map<OrderDTO>(order);
                mapOrder.Cost = order.Products.Sum(x => x.Price);
                resutList.Add(mapOrder);
            }
            return resutList;
        }

        public async Task<OrderDTO> CreateNewOrder(NewOrderCommand command)
        {
            var order = mapper.Map<Order>(command);
            order.CreatedAt = DateTime.Now;
            var products = await this.productRepository.GetWhere(x => command.ProductIds.Any(z => z == x.Id));
            order.Products = products.ToList();
            await orderRepository.Add(order);
            var newOrder = await orderRepository.GetFullOrder(order.Id);
            return mapper.Map<OrderDTO>(newOrder);
        }

        public async Task UpdateOrder(UpdateOrderCommand command)
        {
            var entity = await orderRepository.GetFullOrder(command.Id);
            if (entity != null)
            {;
                entity.CustomerId = command.CustomerId;
                entity.Description = command.Description;
                entity.OrderStatusId = command.OrderStatusId;

                var products = await this.productRepository.GetWhere(x => command.ProductIds.Any(z => z == x.Id));
                entity.Products = products.ToList();

                await orderRepository.Update(entity);
            }
        }

    }
}
