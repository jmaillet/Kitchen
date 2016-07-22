using System;

namespace Kitchen.Models
{
    public class Ingredient
    {
        public Ingredient(string name, decimal quantity, string unit, Recipe recipe)
        {
            Name = name;
            Quantity = quantity;
            Unit = unit;
            Recipe = recipe;
        }

        public string Name { get; private set; }
        public decimal Quantity { get; private set; }
        public string Unit { get; private set; }
        public Recipe Recipe { get; private set; }
    }
}