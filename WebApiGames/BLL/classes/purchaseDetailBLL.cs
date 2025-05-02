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
    public class purchaseDetailBLL : InterfacePurchaseDetailBLL
    {
        IMapper iMapper;
        IpurchaseDetailDAL I;

        public purchaseDetailBLL (IpurchaseDetailDAL I)
        {
            this.I = I;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }


        //הוספת פרטי קניה לטבלה
        public bool Adddetails(purchaseDetailDTO purchaseDetail)
        {
            PurchaseDetail pd = iMapper.Map<purchaseDetailDTO, PurchaseDetail>(purchaseDetail);
            return I.Add(pd);
        }
        //שליפת כל פרטי הקניות
        public List<purchaseDetailDTO> GetAlldetails()
        {
            return iMapper.Map< List<PurchaseDetail>, List<purchaseDetailDTO> >(I.Get());
        }

        

        //שמירת סל קניות 
        public bool SaveShoppingBasket_Details(int purchaseId, List<shoppingBasketDTO> listshoppingBasketDTO)
        {
            try
            {
                
                foreach (var item in listshoppingBasketDTO)
                {
                    PurchaseDetail p = new PurchaseDetail();
                    p.PurchaseCode = purchaseId;
                    p.GameCode = item.GameId;
                    p.Quantity = item.Quantity;
                    I.Add(p);
                }
                return true;
            }
            catch
            {

                return false;
            }
        }


        // מחזירה את כל פרטי הקניה של קניה מסוימת
       
        public List<purchaseDetailDTO> GetSaleDetailByshoppingId(int shoppingId)
        {
            List<purchaseDetailDTO> purchaseDetailShopping = new List<purchaseDetailDTO>();
            List<purchaseDetailDTO> l = iMapper.Map <List<PurchaseDetail>, List<purchaseDetailDTO>>(I.Get());
            foreach (var item in l)
            {
                if (item.PurchaseCode == shoppingId)
                    purchaseDetailShopping.Add(item);
            }
            return purchaseDetailShopping;
        }
    }

}



//שמירת ביצוע הקניה
/* try
 {
    foreach (var item in listshoppingBasketDTO)
        if (item != null)
            I.Add(new PurchaseDetail()
            {
                PurchaseCode = purchaseId,
                GameCode = item.GameId,
                Quantity = item.Quantity,
            });
    return true;
}
catch { return false; }*/
