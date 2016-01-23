using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Kitchen.Models;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Kitchen.Controllers
{
    public class RecipeController : Controller
    {
        // GET: /<controller>/
        [HttpGet]
        public IActionResult Get()
        {
            var Recipes = new List<Recipe>() {
                new Recipe {Id =1, Name="Chicken Curry", Description= "slow cooked chicken in Indian curry sauce" },
                new Recipe {Id=2, Name="Spaghetti w/ Meatballs", Description="Traditional Spaghetti with Meatballs" }
            };
            return Json(Recipes);
        }
    }
}
