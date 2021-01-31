using ConsoleTestTask.models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.ServiceModel.Syndication;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace ConsoleTestTask.BI
{
    public class XmlService
    {
        XDocument xdoc;
        XElement root;

        private string xmlFileName = "xmlConfig.xml";
        private string rootName = "feeds";
        private string elementName = "feed";
        public string elementIdName = "id";
        public string elementUrlName = "url";
        private static XmlService instance;
        private static object syncObject = new object();

        protected XmlService()
        {
            if(!File.Exists(xmlFileName))
            {
                File.Create(xmlFileName).Dispose();
                if (!File.Exists(xmlFileName))
                {
                    throw new Exception("No xml file");
                }
                xdoc = new XDocument();
                xdoc.Add(GetRootElement());
                xdoc.Save(xmlFileName);
                root = xdoc.Element(rootName);
            }
            else
            {
                xdoc = XDocument.Load(xmlFileName);
                root = xdoc.Element(rootName);
            }
        }

        public static XmlService getInstance()
        {
            if (instance == null)
            {
                lock (syncObject)
                {
                    if (instance == null)
                        instance = new XmlService();
                }
            }
            return instance;
        }

        public void AddNewFeedToFile(Feed feed)
        {
            var userElement = GetFeedElement(feed);
            var isElementExist = IsFeedExistWithSameName(feed.Name);
            if (isElementExist)
            {
                Message.WarningMessage("Feed with current name exist. Try rename feed or delete");
            }
            else
            {
                root.Add(userElement);
                xdoc.Save(xmlFileName);
                Message.SuccessfulMessage("The value was added successfully");
            }
        }

        public void RemoveFeedFromFile(string name)
        {
            var isElementExist = IsFeedExistWithSameName(name);
            if(isElementExist)
            {
                var element = GetElementWithAttributeName(name);
                element.Remove();
                xdoc.Save(xmlFileName);
                Message.SuccessfulMessage("The value was deleted successfully");
            }
            else
            {
                Message.WarningMessage("No value found with this name");
            }
        }

        public List<FeedItem> GetFromResponseFeedItem(string response)
        {
            try
            {
                XDocument doc = XDocument.Parse(response);
                var feedItems = from item in doc.Root.Descendants()
                                .First(i => i.Name.LocalName == "channel")
                                .Elements()
                                .Where(i => i.Name.LocalName == "item")
                                select new FeedItem
                                {
                                    Link = item.Elements().First(i => i.Name.LocalName == "link").Value,
                                    Title = item.Elements().First(i => i.Name.LocalName == "title").Value
                                };
                return feedItems.ToList();
            }
            catch(Exception e)
            {
                Message.WarningMessage("Can`t parse this xml format");
            }
            return new List<FeedItem>();
        }

        public List<Feed> GetAllFeedFromFile()
        {
            return GetAllFeeds().Select(x => new Feed {
                Name = x.Element(elementIdName).Value,
                Url = x.Element(elementUrlName).Value
            }).ToList();
        }

        public void ReadAllFeeds()
        {
            var items = GetAllFeeds();
            if(items.Count == 0)
            {
                Console.WriteLine("No feeds if file. Add some values");
            }
            else
            {
                GetAllFeeds().ForEach(x =>
                {
                    Console.WriteLine($"\nName: {x.Element(elementIdName).Value}");
                    Console.WriteLine($"Url: {x.Element(elementUrlName).Value}");
                    Console.WriteLine(new string('-', 40));
                });
            }
        }

        private XElement GetFeedElement(Feed feed)
        {
            XElement element = new XElement(elementName);

            XAttribute elementAttr = new XAttribute(elementIdName, feed.Name);
            XElement nameElem = new XElement(elementIdName, feed.Name);
            XElement urlElem = new XElement(elementUrlName, feed.Url);
 
            element.Add(elementAttr);
            element.Add(nameElem);
            element.Add(urlElem);
            return element;

        }
        
        public bool IsNoAnyFeedsInFile()
        {
            return !root.Elements(elementName).Any();
        }

        public string GetUrlFromXML(string name)
        {
            return GetElementWithAttributeName(name).Element(elementUrlName).Value;
        }

        private XElement GetRootElement()
        {
            return new XElement(rootName);
        }

        private XElement GetElementWithAttributeName(string name)
        {
            return GetAllFeeds().FirstOrDefault(x => x.Attribute(elementIdName).Value == name);
        }

        public bool IsFeedExistWithSameName(string name)
        {
            return GetAllFeeds().Any(x => x.Attribute(elementIdName).Value == name);
        }

        private List<XElement> GetAllFeeds()
        {
            return root.Elements(elementName).ToList();
        }
        
    }
}
