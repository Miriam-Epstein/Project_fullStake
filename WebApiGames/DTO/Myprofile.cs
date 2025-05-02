using AutoMapper;
using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Myprofile : Profile
    {
        public Myprofile()
        {
            //ההמרה מתבצעת אוטומטית למשתנים הניקראים באותו שם!!!!!!!!!!!!!!!!!
            //CreateMap<ItemsTable-שם הטבלה בדל, ItemDTO-המחלקה >();
            //המרות ל-2 הכיוונים
            //ForMember--המרה ספציפית למשתנה מסוים

            //ועכשיו נבצע את ההמרות בין סוגי המשתנים

            // game - פה נבצע המרה של טבלת משחקים 

            CreateMap<Game, gameDTO>().
                ForMember(x => x.nameCategory, y => y.
                MapFrom(v => v.CategoryCodeNavigation.CategoryName))//  הוא עושה בעיות nameCtagory למה לא ניתן לגשת ל 
                .ForMember(g => g.barcod, c => c.
                MapFrom(m => m.CategoryCodeNavigation.CategoryId+"הברקוד הוא:000 "));
            CreateMap<gameDTO, Game > ();

            //m.CategoryCodeNavigation.CategoryId--זה נותן לי גישה למשתנים של מחלקת קטגוריה 


            //המרת נתונים לטבלת קטגוריה
            CreateMap<Category, categoryDTO>();
            CreateMap<categoryDTO, Category>();

            //המרת נתונים לטבלת לקוחות
            CreateMap<Customer, customerDTO>();
            CreateMap<customerDTO, Customer>();

            //קניות
            CreateMap<Shopping, ShoppingDTO>();
            CreateMap<ShoppingDTO, Shopping>();


            //פרטי קניות
            CreateMap<PurchaseDetail,purchaseDetailDTO >();
            CreateMap<purchaseDetailDTO,PurchaseDetail>();

            //המרת נתונים לטבלת סל קניות
            CreateMap<shoppingBasketDTO, Shopping>();


           

           
        }

    }
}
