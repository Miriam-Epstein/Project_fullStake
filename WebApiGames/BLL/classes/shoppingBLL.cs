using AutoMapper;
using BLL.services;
using DAL.classes;
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
    public class shoppingBLL : InterfaceSoppingBLL
    {
        IMapper iMapper;
        IshoppingDAL I;

        public shoppingBLL(IshoppingDAL i)
        {
            I = i;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }


        //שמירה
        public int saveShopping(int customerId , List<shoppingBasketDTO> listshoppingBasketDTO)
        {
            try
            {
                Shopping s = new Shopping();
                s.CustomerCode = customerId;             //קןד לקוח
                s.Date = DateTime.Now;   //תאריך קניה

                decimal? sum = 0;     //NULL לא הסכים בלי זה למרות שעשיתי את התנאי של ה
                foreach (var item in listshoppingBasketDTO)
                {
                   // if (item.TotsalEmount != null)
                        sum += item.Quantity * item.Price;
                    //sum += item.GamePrice * item.Emount;

                }
                s.Amount = (int) sum;            //add the sum of the TotsalEmount
                I.Add(s);                   //add to the DB

                return s.ShoppingId;             //get to react
            }
            catch
            {
                return -1;
            }

        }

        //שליפה
        public List<ShoppingDTO> getShoppingList()
        {
            return iMapper.Map<List<Shopping>, List<ShoppingDTO>>(I.Get());
        }


        //הוספה
        public bool Addshopping(ShoppingDTO shopping)
        {

            return I.Add(iMapper.Map<ShoppingDTO, Shopping>(shopping));

        }

        //פונקציה השולפת את כל הקניות של אידי מסוים- לקוח מסוים

        public List<ShoppingDTO> getShoppingcustomer( int customerId)
        {
            List<ShoppingDTO> shoppingCust = new List<ShoppingDTO>();
            List<ShoppingDTO> l = iMapper.Map<List<Shopping>, List<ShoppingDTO>>(I.Get());
            foreach (var item in l)
            {
                if (item.CustomerCode == customerId)
                    shoppingCust.Add(item);
            }
            return shoppingCust;
        }




    }
}


//שמירת הקניה לשעבר יום חמישי

/*double sum = 0;
foreach (var item in listshoppingBasketDTO)
    if (item != null)
        sum += (double)item.TotsalEmount;
Shopping shopping = new()
{
    CustomerCode = customerId,
    Date = DateTime.Today,
    Amount = (decimal)sum
};
I.Add(shopping);
return shopping.ShoppingId;*/
