using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTestTask.BI
{
    public class RequestService
    {
        private static HttpClient client = new HttpClient();
        private static RequestService instance;
        private static object syncObject = new object();

        protected RequestService()
        {

        }

        public async Task<string> Get(string url)
        {
            var responseMessage = await client.GetAsync(url);
            return await responseMessage.Content.ReadAsStringAsync();
        }

        public bool IsUriValid(string uri)
        {
            return Uri.TryCreate(uri, UriKind.Absolute, out var outUri)
                && (outUri.Scheme == Uri.UriSchemeHttp || outUri.Scheme == Uri.UriSchemeHttps);
        }

        public static RequestService getInstance()
        {
            if (instance == null)
            {
                lock (syncObject)
                {
                    if (instance == null)
                        instance = new RequestService();
                }
            }
            return instance;
        }
    }
}
