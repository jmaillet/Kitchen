using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen.Models {
    public class Recipe {

        public Recipe() {
            Steps = new HashSet<InstructionStep>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<InstructionStep> Steps { get; set; }
    }
}
