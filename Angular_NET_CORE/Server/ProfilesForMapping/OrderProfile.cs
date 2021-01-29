using AutoMapper;
using Common.DB_MODELS;
using Common.DTO.Orders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProfilesForMapping
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<Order, FullOrderDTO>();
            CreateMap<Order, OrderDTO>();
        }
    }
}
