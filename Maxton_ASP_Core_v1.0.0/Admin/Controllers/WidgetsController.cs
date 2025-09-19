using Microsoft.AspNetCore.Mvc;

namespace maxton.Controllers
{
    public class WidgetsController : Controller
    {
        public IActionResult Data()
        {
            return View();
        }
        public IActionResult Static()
        {
            return View();
        }
    }
}
