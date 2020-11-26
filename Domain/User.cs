using System;

namespace Domain
{
    public class User : IdentityObjectBase
    {
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public int EmployeeID { get; set; }
        public string Password { get; set; }
        public string Location { get; set; }
        public long Phone { get; set; }
    }
}
