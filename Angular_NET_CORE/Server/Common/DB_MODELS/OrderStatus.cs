﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DB_MODELS
{
    public class OrderStatus : BaseEntity
    {
        public string Status { set; get; }
        public List<Order> Orders { set; get; }
    }
}
