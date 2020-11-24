using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{ 
    public class CoreDBContext : DbContext
    {
        public CoreDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Alarm> Alarms { get; set; }

        // protected override void OnModelCreation(ModelBuilder builder)
        // {
        //     builder.Entity<User>(entity => {
        //         entity.HasKey(e=>e.ID);
        //         entity.Property(e => e.ID).IsRequired();
        //         entity.Property(e => e.ID).HasColumnName("ID");
        //     });
        // }
    }
}
