using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DB_MODELS
{
    public class ProductSize: BaseEntity
    {
        public string Size { set; get; }
        public List<Product> Products { set; get; }
    }
}
