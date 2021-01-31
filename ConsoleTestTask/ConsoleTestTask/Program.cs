using ConsoleTestTask.BI;
using ConsoleTestTask.models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleTestTask
{
    class Program
    {
        static void Main(string[] args)
        {
            RunProgram().GetAwaiter().GetResult();
        }

        static async Task RunProgram()
        {
            var feedFactory = FeedFactory.getInstance();
            var xmlService = XmlService.getInstance();
            var httpService = RequestService.getInstance();
            while (true)
            {
                Menu();
                Console.Write("Enter: ");
                if (ValidateNumberInput(out var key))
                {
                    switch (key)
                    {
                        case 1:
                            {
                                Console.Clear();
                                Console.Write("Enter name: ");
                                string name = Console.ReadLine();
                                Console.Write("Enter url: ");
                                string url = Console.ReadLine();
                                if(httpService.IsUriValid(url))
                                {
                                    var feed = feedFactory.FactoryFeedMethod(name, url);
                                    xmlService.AddNewFeedToFile(feed);
                                }
                                else
                                {
                                    Message.WarningMessage("Uri is not valid");
                                }
                                break;
                            }
                        case 2:
                            {
                                Console.Clear();
                                Console.Write("Enter name for deleting: ");
                                string name = Console.ReadLine();
                                xmlService.RemoveFeedFromFile(name);
                                break;
                            }
                        case 3:
                            {
                                Console.Clear();
                                Console.WriteLine("1. Load all feeds");
                                Console.WriteLine("2. Load by name");
                                if (ValidateNumberInput(out key))
                                {
                                    switch (key)
                                    {
                                        case 1:
                                            {
                                                if(!xmlService.IsNoAnyFeedsInFile())
                                                {
                                                    var feeds = xmlService.GetAllFeedFromFile();
                                                                                                   
                                                    Parallel.ForEach(feeds, (feed) =>
                                                    {
                                                        var url = xmlService.GetUrlFromXML(feed.Name);
                                                        var responseTask = httpService.Get(url);
                                                        responseTask.Wait();
                                                        var response = responseTask.Result;
                                                        var feeds = xmlService.GetFromResponseFeedItem(response);
                                                        Message.SafeOutputPrintFeeds(feeds, feed.Name);
                                                    });                                                
                                                }
                                                else
                                                {
                                                    Message.WarningMessage("Feed file empty. Add some values");
                                                }
                                                break;
                                            }
                                        case 2:
                                            {
                                                Console.Clear();
                                                Console.Write("Enter name: ");
                                                string name = Console.ReadLine();
                                                var feedExist = xmlService.IsFeedExistWithSameName(name);
                                                if(feedExist)
                                                {
                                                    Console.Clear();
                                                    Console.WriteLine("\n\n");
                                                    var url = xmlService.GetUrlFromXML(name);
                                                    var response = await httpService.Get(url);
                                                    var feeds = xmlService.GetFromResponseFeedItem(response);
                                                    Message.PrintFeeds(feeds, name);
                                                }
                                                else
                                                {
                                                    Message.WarningMessage("No value found with this name");
                                                }
                                                break;
                                            }
                                        default:
                                            {
                                                Message.MessageRange(1, 2);
                                                break;
                                            }
                                    }
                                }
                                else
                                {
                                    Message.WarningMessage("Is not number.Enter number");
                                }
                                break;
                            }
                        case 4:
                            {
                                Console.Clear();
                                Console.WriteLine("Feeds\n");
                                xmlService.ReadAllFeeds();
                                break;
                            }
                        case 5:
                            {
                                Console.Clear();
                                Environment.Exit(0);
                                break;
                            }
                        default:
                            {
                                Message.MessageRange(1, 5);
                                break;
                            }
                    }
                }
                else
                {
                    Message.WarningMessage("Is not number. Enter number");
                }
            }
        }
        static bool ValidateNumberInput(out int key)
        {
            if (Int32.TryParse(Console.ReadLine(), out key))
                return true;
            return false;
        }

        static void Menu()
        {

            Console.WriteLine("\n\n1.  Add Feed");
            Console.WriteLine("2.  Remove Feed ");
            Console.WriteLine("3.  Download Feeds");
            Console.WriteLine("4.  See Feeds");
            Console.WriteLine("5.  Exit\n");
        }
    }
}
