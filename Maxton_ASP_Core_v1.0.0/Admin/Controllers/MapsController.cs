using Microsoft.AspNetCore.Mvc;

namespace maxton.Controllers
{
	public class MapsController : Controller
	{
		public IActionResult Google()
		{
			return View();
		}

		public IActionResult Vector()
		{
			return View();
		}
	}
}
