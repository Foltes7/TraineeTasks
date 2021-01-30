using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Commands
{
    public class NewOrderCommand
    {
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public int OrderStatusId { set; get; }
        public string Description { set; get; }
        public List<int> ProductIds { set; get; }
    }
}
