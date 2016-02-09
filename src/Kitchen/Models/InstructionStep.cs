namespace Kitchen.Models {
    public class InstructionStep {
        public int Id { get; set; }
        public string Detail { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
     
    }
}