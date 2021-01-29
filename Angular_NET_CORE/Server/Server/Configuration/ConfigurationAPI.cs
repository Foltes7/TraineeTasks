using BI.Interfaces;
using BI.Services;
using DAL;
using DAL.GenericRepository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Configuration
{
    public static class ConfigurationAPI
    {

        public static void BL(this IServiceCollection services, IConfiguration Configuration)
        {
            services.AddTransient<ICustomerService, CustomersService>();
            services.AddTransient<IOrdersService, OrdersService>();
            services.AddTransient<IOrdersService, OrdersService>();
        }

        public static void DataBase(this IServiceCollection services, IConfiguration Configuration)
        {
            string connection = Configuration.GetSection("Database").Value;
            services.AddDbContext<AppContextDatabase>(options => options.UseSqlServer(connection));

            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
        }
    }
}
