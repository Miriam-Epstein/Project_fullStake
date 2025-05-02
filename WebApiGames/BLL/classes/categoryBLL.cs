using AutoMapper;
using BLL.services;
using DAL.models;
using DAL.services;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.classes
{
    public class categoryBLL : InterfaceCategoryBLL
    {

        //לאפשר המרת נתונים
        IMapper iMapper;
        IcategoryDAL I;            //בשביל להשתמש בממשק יצרנו ממנו מופע

        public categoryBLL(IcategoryDAL I)
        {
            this.I = I;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();

        }
        //הוספה לרשימה
        public bool addCategory(categoryDTO category)
        {
            Category cg = iMapper.Map<categoryDTO, Category>(category);
            return I.Add(cg);
        }
        //הסרת קטגוריה מהרשימה
        public bool deletCategory(int id)
        {
            return I.Delete(id);
        }

        //שליפת רשימה
        public List<categoryDTO> GetAll()
        {

            return iMapper.Map<List<Category>, List<categoryDTO>>(I.Get());
        }
        //שליפת קטוגריה לפי קוד
        public categoryDTO getcatgory_id(int id)
        {
            List<categoryDTO> categoryListID = iMapper.Map<List<Category>, List<categoryDTO>>(I.Get());
            foreach (var v in categoryListID)
            {
                if (v.CategoryId == id)
                    return v;
            }
            return null;
        }
        //עדכון קטוגריה ברשימה

        public bool UpdateCategory(int id, categoryDTO category)
        {
            Category cg = iMapper.Map<categoryDTO, Category>(category);
            return I.Update(id , cg);
        }
    }
}
