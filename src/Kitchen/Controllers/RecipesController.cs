using System.Collections.Generic;
using System.Linq;
using Kitchen.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Kitchen.Controllers
{
    [Route("api/[controller]")]
    public class RecipesController : Controller
    {
        private static readonly List<Recipe> Recipes = new List<Recipe>()
        {
            new Recipe {Id = 1, Name = "Chicken Curry", Description = "slow cooked chicken in Indian curry sauce"},
            new Recipe {Id = 2, Name = "Spaghetti w/ Meatballs", Description = "Traditional Spaghetti with Meatballs"}
        };

        // GET: /<controller>/
        [HttpGet]
        public IEnumerable<Recipe> GetAll() => Recipes;

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var recipe = Recipes.SingleOrDefault(r => r.Id == id);
            if (recipe == null) return NotFound();
            return new ObjectResult(recipe);
        }
    }
}