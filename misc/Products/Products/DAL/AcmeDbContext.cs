using Microsoft.EntityFrameworkCore;
using Products.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Products.DAL
{
    public class AcmeDbContext : DbContext
    {
        public AcmeDbContext() { }

        public AcmeDbContext(DbContextOptions<AcmeDbContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.Relational().TableName = entity.ClrType.Name;
            }
        }
    }
}
