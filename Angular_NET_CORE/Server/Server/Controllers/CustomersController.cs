using BI.Interfaces;
using Common.Commands;
using Common.DTO;
using Common.DTO.Customers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomersService customerService;
        public CustomersController(ICustomersService customerService)
        {
            this.customerService = customerService;
        }

        [HttpGet]
        public async Task<IEnumerable<CustomerTableItem>> GetCustomers()
        {
            return await this.customerService.GetCustomers();
        }

        [HttpGet("{id}")]
        public async Task<CustomerViewDetails> GetCustomer(int id)
        {
            return await this.customerService.GetCustomer(id);
        }

        [HttpPost]
        public async Task<CustomerTableItem> CreateNewCustomer(NewCustomerCommand command)
        {
            return await this.customerService.CreateNewCustomer(command);
        }

    }
}
