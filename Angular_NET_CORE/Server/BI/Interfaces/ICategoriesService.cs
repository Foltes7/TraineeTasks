using Common.DB_MODELS;
using Common.DTO.Categories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Interfaces
{
    public interface ICategoriesService
    {
        Task<IEnumerable<CategoryDTO>> GetAll();
    }
}
