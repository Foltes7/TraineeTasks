using AutoMapper;
using BI.Interfaces;
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
    }
}
