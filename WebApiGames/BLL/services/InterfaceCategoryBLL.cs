using AutoMapper;
using DAL.services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public interface InterfaceCategoryBLL
    {

     
        //שליפת רשימה

        public List<categoryDTO> GetAll();

        //שליפת קטוגריה לפי קוד

        public categoryDTO getcatgory_id(int id);

        //הוספה לרשימה
        public bool addCategory(categoryDTO category);

        //עדכון קטוגריה ברשימה
        public bool UpdateCategory(int id , categoryDTO category);


        //מחיקת קטגוריה מהרשימה
        public bool deletCategory(int id);

    }
}
