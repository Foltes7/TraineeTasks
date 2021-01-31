using ConsoleTestTask.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTestTask.BI
{
    public class FeedFactory
    {
        private static FeedFactory instance;
        private static object syncObject = new object();

        protected FeedFactory()
        {

        }

        public static FeedFactory getInstance()
        {
            if (instance == null)
            {
                lock (syncObject)
                {
                    if (instance == null)
                        instance = new FeedFactory();
                }
            }
            return instance;
        }

        public Feed FactoryFeedMethod(string name, string url)
        {
            return new Feed { Name = name, Url = url };
        }
    }
}
