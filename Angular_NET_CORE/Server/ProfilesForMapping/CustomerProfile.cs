using AutoMapper;
using Common.Commands;
using Common.DB_MODELS;
using Common.DTO.Customers;
using Common.DTO.Orders;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProfilesForMapping
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<NewCustomerCommand, Customer>()
                .ForMember(dest => dest.Address, memb => memb.MapFrom(x => x.Address))
                .ForMember(dest => dest.Name, memb => memb.MapFrom(x => x.Name));

            CreateMap<Customer, CustomerViewDetails>()
                .ForMember(dest => dest.Id, memb => memb.MapFrom(x => x.Id))
                .ForMember(dest => dest.CreatedAt, memb => memb.MapFrom(x => x.CreatedAt))
                .ForMember(dest => dest.Name, memb => memb.MapFrom(x => x.Name))
                .ForMember(dest => dest.Address, memb => memb.MapFrom(x => x.Address));

            CreateMap<Customer, CustomerTableItem>()
                .ForMember(dest => dest.Id, memb => memb.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, memb => memb.MapFrom(x => x.Name))
                .ForMember(dest => dest.Address, memb => memb.MapFrom(x => x.Address));

            CreateMap<Customer, OrderCustomerDTO>();
        }
    }
}
