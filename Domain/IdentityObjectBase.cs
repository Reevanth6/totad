using System;

namespace Domain
{
    public abstract class IdentityObjectBase : IIdentityObject<int>
    {
        public int ID { get; set; }
    }
}
