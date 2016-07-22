using Microsoft.AspNetCore.Mvc;

namespace Kitchen.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Kitchen";
            return View();
        }
    }
}