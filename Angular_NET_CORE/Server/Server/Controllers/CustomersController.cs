using BI.Interfaces;
using Common.Commands;
using Common.DTO;
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
    public class CustomersController : ControllerBase
    {
        private readonly ICustomersService customerService;
        public CustomersController(ICustomersService customerService)
        {
            this.customerService = customerService;
        }

        [HttpGet]
        public Task<List<CustomerDTO>> GetCustomers()
        {
            return null;
        }

        [HttpGet("{id}")]
        public Task<List<CustomerDTO>> GetCustomer(int id)
        {
            return null;
        }

        [HttpPost()]
        public Task<List<CustomerDTO>> CreateNewCustomer(NewCustomerCommand command)
        {
            return null;
        }

    }
}
