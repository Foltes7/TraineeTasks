using Common.DB_MODELS;
using Common.DTO.Products;
using DAL.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
        Task<IEnumerable<Product>> GetAllProducts();
        Task<IEnumerable<Product>> GetProductsExceptOrderId(int id);
        Task<Product> GetFullProduct(int id);
    }
}
