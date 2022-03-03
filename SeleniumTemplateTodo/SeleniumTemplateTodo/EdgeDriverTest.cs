using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;

namespace SeleniumTemplateTodo
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = ".";
        private const string todoUrl = "http://127.0.0.1:5500/index.html";
        private EdgeDriver browser;

        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            browser.Url = todoUrl;
        }

        [TestMethod]
        public void AddNote()
        {
            browser.Url = todoUrl;
            var noteInput = browser.FindElementByCssSelector("#input");
            noteInput.SendKeys("hej");
            noteInput.SendKeys(Keys.Enter);
        }

        [TestMethod]
        public void OneItem()
        {
            browser.Url = todoUrl;
            var noteInput = browser.FindElementByCssSelector("#input");
            noteInput.SendKeys("hej");
            noteInput.SendKeys(Keys.Enter);

            var activeTasks = browser.FindElementById("active-tasks");
            var p = activeTasks.Text;
            Assert.AreEqual("1 item left", p);

            var done = browser.FindElementByClassName("toggle");
            done.Click();

            var p2 = activeTasks.Text;
            Assert.AreEqual("0 item left", p2);
        }

        [TestMethod]
        public void TwoOfThreeItemsLeft()
        {
            browser.Url = todoUrl;
            var noteInput = browser.FindElementByCssSelector("#input");
            noteInput.SendKeys("hej");
            noteInput.SendKeys(Keys.Enter);

            var noteInput2 = browser.FindElementByCssSelector("#input");
            noteInput2.SendKeys("på");
            noteInput2.SendKeys(Keys.Enter);

            var noteInput3 = browser.FindElementByCssSelector("#input");
            noteInput3.SendKeys("dig");
            noteInput3.SendKeys(Keys.Enter);

            var done = browser.FindElementByClassName("toggle");
            done.Click();

            var activeTasks = browser.FindElementById("active-tasks");
            var p = activeTasks.Text;
            Assert.AreEqual("2 item left", p);

        }

        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            //browser.Quit();
        }
    }
}
