using Common.DB_MODELS;
using DAL.GenericRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    { 
        public CustomerRepository(AppContextDatabase context) : base(context) { }

        public async Task<IEnumerable<Customer>> GetAllForTable()
        {
            return await this.context.Customers.Include(x => x.Orders).OrderByDescending(x => x.CreatedAt).ToListAsync();
        }
    }
}
