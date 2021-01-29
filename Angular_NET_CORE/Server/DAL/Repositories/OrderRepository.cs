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
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(AppContextDatabase context) : base(context) { }

        public async Task<IEnumerable<Order>> GetAllOrders()
        {
            return await this.context.Orders
                .Include(x => x.Customer)
                .Include(x => x.OrderStatus)
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();
        }

        public async Task<Order> GetFullOrder(int id)
        {
            return await this.context.Orders
                .Include(x => x.Products)
                .FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
