using Common.DB_MODELS;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class AppContextDatabase : DbContext
    {
        public DbSet<Customer> Customers { set; get; }
        public DbSet<Product> Products { set; get; }
        public DbSet<Order> Orders { set; get; }

        public AppContextDatabase(DbContextOptions<AppContextDatabase> options) : base(options)
        {
            //Database.EnsureCreated();
        }
    }
}
