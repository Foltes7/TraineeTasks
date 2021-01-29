using Common.DB_MODELS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Interfaces
{
    public interface ICategoriesService
    {
        Task<IEnumerable<ProductCategory>> GetAll();
    }
}
