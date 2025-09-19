using Microsoft.AspNetCore.Mvc;

namespace maxton.Controllers
{
	public class PagesController : Controller
	{
		

        public IActionResult E404()
        {
            return View();
        }
        public IActionResult E505()
        {
            return View();
        }
        public IActionResult Comingsoon()
        {
            return View();
        }
        public IActionResult Blank()
        {
            return View();
        }

    }
}
