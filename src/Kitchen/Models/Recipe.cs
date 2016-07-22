using System.Collections.Generic;

namespace Kitchen.Models
{
    public class Recipe
    {
        private readonly List<Ingredient> _ingredients;
        private readonly List<InstructionStep> _steps;

        public Recipe()
        {
            _steps = new List<InstructionStep>();
            _ingredients = new List<Ingredient>();
        }

        public string Description { get; set; }
        public int Id { get; set; }
        public IReadOnlyCollection<Ingredient> Ingredients => _ingredients.AsReadOnly();
        public string Name { get; set; }
        public IReadOnlyCollection<InstructionStep> Steps => _steps.AsReadOnly();

        private void AddIngredient(string name, decimal quantity, string unit)
        {
            var ingredient = new Ingredient(name, quantity, unit, this);
            _ingredients.Add(ingredient);
        }

        private void AddInstructionStep(int stepNumber, string detail)
        {
            var instructionStep = new InstructionStep(stepNumber, detail, this);
            _steps.Add(instructionStep);
        }
    }
}