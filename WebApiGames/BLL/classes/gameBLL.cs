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
    public class gameBLL : InterfaceGameBLL
    {

        //לאפשר המרת נתונים
        IMapper iMapper;
        IgameDAL I;            //בשביל להשתמש בממשק יצרנו ממנו מופע

        public gameBLL(IgameDAL I)
        {
            this.I = I;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<Myprofile>();
            });
            iMapper = config.CreateMapper();

        }


        //ועכשיו נתחיל בעזרת ה' בממוש הפונקציות


        //*****************************???????????????????????????????????????????????????????????/****************************
        //*****************************למה פונקצית הוספה לא עובדת**************************************************************
        //*****************************???????????????????????????????????????????????????????????/****************************
        //----------------------------------------פשוט צריך לשים לב באיזה צורה למלאות אותה--------------------
        //ממוש הוספת משחק
        public bool addgame(gameDTO item)
        {
            Game itemtoadd = iMapper.Map<gameDTO,Game>(item);
            return I.Add(itemtoadd);
        }

        //--ברוך ה' עובד-ממוש מחיקה
        public bool dell(int id)
        {
            return I.Delete(id);
        }

        //לפי הקוד ממוש שליפת משחק

        public gameDTO Getgame_ID(int id)
        {
            List<gameDTO> g = iMapper.Map<List<Game>, List<gameDTO>>(I.Get());//שליפת כל המוצרים לסוג DTO
            foreach (var item in g)
            {
                if (item.GameId == id)
                    return item;
            }
            return null;
        }

        //ממוש שליפת משחק לפי קטגוריה
        public List<gameDTO> Getgame_category(int category)
        {
            List<gameDTO> gameCatgory = new List<gameDTO>();
            List<gameDTO> l = iMapper.Map<List<Game>, List<gameDTO>>(I.Get());
            foreach (var item in l)
            {
                if (item.CategoryCode == category)
                    gameCatgory.Add(item);
            }
            return gameCatgory;
        }

        //שליפת רשימה--ברוך ה' עובד
        public List<gameDTO> GetAll()
        { 

            return iMapper.Map<List<Game>, List<gameDTO>>(I.Get());
        }

        //עדכון משחק-ברוך ה' עובד
        public bool updgame(int id, gameDTO item)
        {
            Game it = iMapper.Map<gameDTO,Game>(item);
            return I.Update(it,id);
        }



        //  מעדכן כמות לאחר קניה
        public bool saveEmount(List<shoppingBasketDTO>  Sp )
        {
            try
            {
                foreach (var item in Sp)                                             //update all games
                {
                    Game g = new Game();
                    g = iMapper.Map<gameDTO, Game>(Getgame_ID(item.GameId));    //get game by id
                    g.QuantityInStock = g.QuantityInStock - item.Quantity;
                    I.Update(g,item.GameId);
                }
                return true;
            }
            catch
            {
                return false;
            }

        }
/*
        //  מעדכן כמות לאחר קניה
        public bool saveEmount(List<shoppingBasketDTO> Sp)
        {
            try
            {
                foreach (var item in Sp)                                             //update all games
                {
                    Game g = new Game();
                    g = iMapper.Map<gameDTO, Game>(Getgame_ID(item.GameId));    //get game by id
                    g.QuantityInStock = g.QuantityInStock - item.Quantity;
                    I.Update(g,item.GameId);
                }
                return true;
            }
            catch
            {
                return false;
            }

        }*/

    }



}

