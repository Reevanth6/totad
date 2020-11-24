using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class ResortDBContext : DbContext
    {
        public ResortDBContext(DbContextOptions options) : base(options)
        {
        }

        // public DbSet<Activity> Activities { get; set; }

        // protected override void OnModelCreation(ModelBuilder builder)
        // {
        //     builder.Entity<Activity>()
        //         .HasData();
        // }
    }
}
