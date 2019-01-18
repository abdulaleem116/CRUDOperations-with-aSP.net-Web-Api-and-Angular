using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

using System.Linq;
using System.Web;

namespace CRUD.Models.DomainClasses
{
    public class AppDb : DbContext
    {
        public AppDb() : base("name = MyContextDB") { }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }

    // Employee Class
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public String Email { get; set; }

        public int DepartRefID { get; set; }
        public Department Department { get; set; }

    }

    public class Department
    { 
        [Key]
        public int DepartID { get; set; }
        public string DepartName { get; set; }
        [ForeignKey("DepartRefID")]
        public ICollection<Employee> Employee { get; set; }
    }


}