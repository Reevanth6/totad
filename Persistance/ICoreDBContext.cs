using System;
using System.Collections.Generic;
using System.Linq;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{ 
    public interface ICoreDBContext
    {

        IQueryable<User> Users {get;}
        IQueryable<Alarm> Alarms {get;}
        
        void Add<T>(T entity) where T : IdentityObjectBase;
        void AddRange<T>(IEnumerable<T> entities) where T : IdentityObjectBase;
        void Commit();
        void Delete<T>(T entity) where T : IdentityObjectBase;
        void Delete<T>(int id) where T : IdentityObjectBase;
        void DeleteRange<T>(IEnumerable<T> entities) where T : IdentityObjectBase;
        T Find<T>(int id) where T : IdentityObjectBase;
    }
}
