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
            new Recipe {Id = 2, Name = "Spaghetti w/ Meatballs", Description = "Traditional Spaghetti with Meatballs"},
            new Recipe {Id = 3, Name = "Beef Tenderloin", Description = "Roasted with mustard and herbs"},
            new Recipe {Id = 4, Name = "Roasted Red Pepper Hummus", Description = "Roasted Red Pepper Hummus"},
            new Recipe {Id = 5, Name = "Chicken Vindaloo", Description = "Chicken Vindaloo"},
            new Recipe {Id = 6, Name = "Chicken Tikka Masala", Description = "Chicken Tikka"},
            new Recipe {Id = 7, Name = "Kung Pao Beef", Description = "Kung Pao beef"},
            new Recipe {Id = 8, Name = "Spicy Pork w/ Cashews", Description = "Spicy pork stir fry with Cashews and green beans"},
            new Recipe {Id = 9, Name = "Orecchiette w/ Fennel and Sausage", Description = "yummy"},
            new Recipe {Id = 10, Name = "Spanish Chicken w/ chorizo and chickpeas", Description = "hmmm, chorizo"},
            new Recipe {Id = 11, Name = "Mac&Cheese", Description = "Comfort food"},
            new Recipe {Id = 12, Name = "Chicken fra diavolo", Description = "Traditional Spaghetti with Meatballs"},
            new Recipe {Id = 13, Name = "Roast Chicken", Description = "Roasted with a dry rub"}
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