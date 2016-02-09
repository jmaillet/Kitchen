using System;


namespace Kitchen.Models {
    public class Ingredient {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Quantity { get; set; }

        public Recipe Recipe { get; set; }
        public int RecipeId { get; set; }


    }
}