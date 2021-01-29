using AutoMapper;
using Common.DB_MODELS;
using Common.DTO.Status;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfilesForMapping
{
    public class StatusProfile : Profile
    {
        public StatusProfile()
        {
            CreateMap<OrderStatus, StatusDTO>();
        }
    }
}
