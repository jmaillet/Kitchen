using System;
using Microsoft.Data.Entity;


namespace Kitchen.Models {
    public class KitchenContext : DbContext {
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Recipe>()
                .Property(r => r.Name)
                .IsRequired();

             // pluralize table names
            foreach (var entity in modelBuilder.Model.GetEntityTypes()) {
                modelBuilder.Entity(entity.Name).ToTable(entity.Name + "s");
            }     
        }
    }
}
