namespace Kitchen.Models
{
    public class InstructionStep
    {
        public InstructionStep(int stepNumber, string detail, Recipe recipe)
        {
            StepNumber = stepNumber;
            Detail = detail;
            Recipe = recipe;
        }
        public int Id { get; set; }
        public int StepNumber { get; private set; }
        public string Detail { get; private set; }

        public Recipe Recipe { get; private set; }
    }
}