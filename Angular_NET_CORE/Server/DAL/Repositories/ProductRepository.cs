using Common.DB_MODELS;
using Common.DTO.Products;
using DAL.GenericRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(AppContextDatabase context) : base(context) { }

        public async Task<IEnumerable<Product>> GetAllProducts()
        {
            return await this.context.Products
                .Include(x => x.ProductCategory)
                .Include(x => x.ProductSize)
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();
        }

        public async Task<Product> GetFullProduct(int id)
        {
            return await this.context.Products
                .Include(x => x.ProductCategory)
                .Include(x => x.ProductSize).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Product>> GetProductsExceptOrderId(int id)
        {
            return await this.context.Products
                        .Include(x => x.ProductCategory)
                        .Include(x => x.ProductSize)
                        .Include(x => x.Orders)
                        .Where(x => !x.Orders.Where(order => order.Id == id).Any())
                        .OrderByDescending(x => x.CreatedAt)
                        .ToListAsync();
        }
    }
}
