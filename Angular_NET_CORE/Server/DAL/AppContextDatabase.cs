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
        public DbSet<ProductCategory> ProductCategories { set; get; }
        public DbSet<ProductSize> ProductSizes { set; get; }
        public DbSet<OrderStatus> OrderStatuses { set; get; }
        public AppContextDatabase(DbContextOptions<AppContextDatabase> options) : base(options)
        {
            //Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductSize>().HasData(new ProductSize[]
                {
                    new ProductSize{Size = "Small", Id = 1 },
                    new ProductSize{Size = "Medium", Id = 2 },
                    new ProductSize{Size = "Large", Id = 3 }
                });;
            modelBuilder.Entity<OrderStatus>().HasData(new OrderStatus[]
                {
                    new OrderStatus{Status = "New", Id = 1 },
                    new OrderStatus{Status = "Paid", Id = 2 },
                    new OrderStatus{Status = "Shipped", Id = 3 },
                    new OrderStatus{Status = "Delivered", Id = 4 },
                    new OrderStatus{Status = "Closed", Id = 5 },
                });
            modelBuilder.Entity<ProductCategory>().HasData(new ProductCategory[]
                {
                    new ProductCategory{Category = "Food", Id = 1 },
                    new ProductCategory{Category = "Cloth", Id = 2 },
                    new ProductCategory{Category = "Book", Id = 3 },
                    new ProductCategory{Category = "Electronic", Id = 4 },
                    new ProductCategory{Category = "Toys" , Id = 5 },
                });
        }
    }
}
