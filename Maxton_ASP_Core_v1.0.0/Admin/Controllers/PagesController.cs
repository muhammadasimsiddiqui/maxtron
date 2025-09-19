using Microsoft.AspNetCore.Mvc;

namespace maxton.Controllers
{
	public class PagesController : Controller
	{
		public IActionResult Profile()
		{
			return View();
		}
		public IActionResult Timeline()
		{
			return View();
		}
		public IActionResult FAQ()
		{
			return View();
		}
		public IActionResult Pricing()
		{
			return View();
		}

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
