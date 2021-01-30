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
            return mapper.Map<FullOrderDTO>(order);
        }

        public async Task<IEnumerable<OrderDTO>> GetTableOrders()
        {
            var orders = await this.orderRepository.GetAllOrders();
            return mapper.Map<IEnumerable<OrderDTO>>(orders);
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
            /*
            var entity = await orderRepository.GetById(command.Id);
            if (entity != null)
            {
                entity.Name = command.Name;
                entity.ProductCategoryId = command.ProductCategoryId;
                entity.ProductSizeId = command.ProductSizeId;
                entity.Description = command.Description;
                entity.Price = command.Price;
                entity.Quantity = command.Quantity;
                await productRepository.Update(entity);
            }*/
        }
    }
}
