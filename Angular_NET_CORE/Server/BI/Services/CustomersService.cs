using AutoMapper;
using BI.Interfaces;
using Common.Commands;
using Common.DB_MODELS;
using Common.DTO;
using Common.DTO.Customers;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Services
{
    public class CustomersService : ICustomersService
    {
        private readonly IMapper mapper;
        private readonly ICustomerRepository customerRepository;
        public CustomersService(ICustomerRepository customerRepository, IMapper mapper)
        {
            this.customerRepository = customerRepository;
            this.mapper = mapper;
        }

        public async Task<CustomerTableItem> CreateNewCustomer(NewCustomerCommand command)
        {
            var user = mapper.Map<Customer>(command);
            user.CreatedAt = DateTime.Now;
            await this.customerRepository.Add(user);
            return mapper.Map<CustomerTableItem>(user);
        }

        public async Task<CustomerViewDetails> GetCustomer(int id)
        {
            var user = await this.customerRepository.GetById(id);
            return mapper.Map<CustomerViewDetails>(user);
        }

        public async Task<IEnumerable<CustomerTableItem>> GetCustomers()
        {
            var users = await this.customerRepository.GetAllForTable();
            var usersMapped = users.Select(user =>
            {
                var userMapped = mapper.Map<CustomerTableItem>(user);
                userMapped.OrdersCount = user.Orders.Count;
                userMapped.TotalCost = user.Orders.Sum(order => order.Cost);
                return userMapped;
            });
            return usersMapped;
        }
    }
}
