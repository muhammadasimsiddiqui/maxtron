using Microsoft.AspNetCore.Mvc;

namespace maxton.Controllers
{
	public class TablesController : Controller
	{
		public IActionResult Basic()
		{
			return View();
		}
		public IActionResult Data()
		{
			return View();
		}
	}
}
