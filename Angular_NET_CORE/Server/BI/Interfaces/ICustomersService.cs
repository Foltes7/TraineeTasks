using Common.Commands;
using Common.DTO;
using Common.DTO.Customers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BI.Interfaces
{
    public interface ICustomersService
    {
        Task<CustomerViewDetails> GetCustomer(int id);
        Task<IEnumerable<CustomerTableItem>> GetCustomers();
        Task<CustomerTableItem> CreateNewCustomer(NewCustomerCommand command);
    }
}
