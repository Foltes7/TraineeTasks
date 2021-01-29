using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Commands
{
    public class UpdateProductCommand
    {
        [Required]
        public int Id { set; get; }
        [Required]
        public string Description { set; get; }
        [Required]
        public int Quantity { set; get; }
        [Required]
        public double Price { set; get; }
        [Required]
        public string Name { set; get; }
        [Required]
        public int ProductSizeId { set; get; }
        [Required]
        public int ProductCategoryId { set; get; }
    }
}
