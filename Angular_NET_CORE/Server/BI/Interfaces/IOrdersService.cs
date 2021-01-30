using Common.Commands;
using Common.DTO.Orders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.Interfaces
{
    public interface IOrdersService
    {
        Task<IEnumerable<OrderDTO>> GetTableOrders();
        Task<FullOrderDTO> GetFullOrder(int id);
        Task<OrderDTO> CreateNewOrder(NewOrderCommand command);
        Task UpdateOrder(UpdateOrderCommand command);
    }
}
