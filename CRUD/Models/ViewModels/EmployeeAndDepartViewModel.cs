using CRUD.Models.DomainClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUD.Models.ViewModels
{
    public class EmployeeAndDepartViewModel
    {
         public int EmployeeID { get; set; }
         public string FirstName { get; set; }
         public string LastName { get; set; }
         public string Email { get; set; }

        public int DepartID { get; set; }
        public  string DepartName { get; set; }
     }
}