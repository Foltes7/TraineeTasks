using ConsoleTestTask.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTestTask.BI
{
    public static class Message
    {
        private static object syncObject = new object();
        public static void MessageRange(int one, int two)
        {
            Console.Clear();
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Enter number[{0}-{1}]", one, two);
            Console.ForegroundColor = ConsoleColor.White;
        }

        public static void WarningMessage(string message)
        {
            Console.Clear();
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(message);
            Console.ForegroundColor = ConsoleColor.White;
        }
        public static void SuccessfulMessage(string message)
        {
            Console.Clear();
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(message);
            Console.ForegroundColor = ConsoleColor.White;
        }

        public static void PrintFeeds(List<FeedItem> feeds, string name)
        {

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(name);
            Console.ForegroundColor = ConsoleColor.White;
            foreach (var item in feeds)
            {
                Console.WriteLine($"Title: {item.Title}");
                Console.WriteLine($"Link: {item.Link}");
                Console.WriteLine(new string('-', 40));
            }
        }

        public static void SafeOutputPrintFeeds(List<FeedItem> feeds, string name)
        {
            lock (syncObject)
            {
                PrintFeeds(feeds, name);
            }
        }
    }
}
