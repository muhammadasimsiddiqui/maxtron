using Microsoft.AspNetCore.Mvc;

namespace maxton.Controllers
{
    public class AppsController : Controller
    {
        public IActionResult Chatbox()
        {
            return View();
        }
        public IActionResult Emailbox()
        {
            return View();
        }
        public IActionResult Emailread()
        {
            return View();
        }
        public IActionResult Filemanager()
        {
            return View();
        }
        public IActionResult Calender()
        {
            return View();
        }
        public IActionResult Todo()
        {
            return View();
        }
        public IActionResult Invoice()
        {
            return View();
        }
    }
}
