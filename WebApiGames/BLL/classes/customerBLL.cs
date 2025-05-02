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
    public class customerBLL : InterfaceCustomerBLL
    {

        IcustomerDAL I;
        IMapper iMapper;
        public customerBLL(IcustomerDAL I)
        {
            this.I = I;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();
        }

        //הוספת לקוח
        public bool addCustomer(customerDTO customer)
        {
            Customer c = iMapper.Map<customerDTO, Customer>(customer);
            return I.Add(c);
        }


        //האם קיים לקוח לפי שם וסיסמה
        public int haveCustomer(string custName, string custPassWord)
        {
            
            List<customerDTO> listCustomer = iMapper.Map<List<Customer>, List<customerDTO>>(I.Get());
            foreach (var c in listCustomer)
            {
                //אם השם ופרטי כרטיס אשראי אותו דבר
                if (c.Name.Equals(custName)
                    && c.Password.Equals(custPassWord))
                    return c.CustomerId;
            }
            return 0;

        }

        //לפני השינוי שמחזיר אידי
       /*
        //האם קיים לקוח לפי שם וסיסמה
        public bool haveCustomer(string custName, string custPassWord)
        {

            List<customerDTO> listCustomer = iMapper.Map<List<Customer>, List<customerDTO>>(I.Get());
            foreach (var c in listCustomer)
            {
                //אם השם ופרטי כרטיס אשראי אותו דבר
                if (c.Name.Equals(custName)
                    && c.Password.Equals(custPassWord))
                    return true;
            }
            return false;

        }
       */

    }
}
