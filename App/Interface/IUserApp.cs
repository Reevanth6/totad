using System;
using Domain;

namespace App
{
    public interface IUserApp
    {
        bool ValidateUser(string email, string password);

        int RegisterUser(User user);
        void Reset(string email);

    }
}
