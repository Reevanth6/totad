using System;
using System.Collections.Generic;
using System.Linq;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{ 
    public class CoreDBContext : DbContext, ICoreDBContext
    {
        public CoreDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<Alarm> Alarm { get; set; }

        public IQueryable<User> Users {get { return User; }}
        public IQueryable<Alarm> Alarms {get { return Alarm; }}

        public void AddRange<T>(IEnumerable<T> entities)  where T : IdentityObjectBase{
            Set<T>().AddRange(entities);
        }

        public void Commit()
        {
            SaveChanges();
        }

        public void Delete<T>(T entity) where T : IdentityObjectBase
        {
            Set<T>().Remove(entity);
        }

        public void Delete<T>(int id) where T : IdentityObjectBase
        {
            Set<T>().Remove(Set<T>().Find(id));
        }

        public void DeleteRange<T>(IEnumerable<T> entities) where T : IdentityObjectBase
        {
            Set<T>().RemoveRange(entities);
        }

        public void Add<T>(T entity) where T : IdentityObjectBase
        {
            Set<T>().Add(entity);
        }

        public T Find<T>(int id) where T : IdentityObjectBase
        {
            return Set<T>().Find(id);
        }


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
