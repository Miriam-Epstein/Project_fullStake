using AutoMapper;
using BLL.classes;
using BLL.services;
using DAL.classes;
using DAL.models;
using DAL.services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//הזרקות של כל מחלקה לממשר הגנרי
//תיקון טעות-בסוך לא עשיתי ג'נרי
//הזרקות של ממשקי שכבת הדל
builder.Services.AddScoped<IcategoryDAL,categoryDAL >();
builder.Services.AddScoped<IcustomerDAL, customerDAL>();
builder.Services.AddScoped<IgameDAL, gameDAL>();
builder.Services.AddScoped<IpurchaseDetailDAL, purchaseDetailDAL>();
builder.Services.AddScoped< IshoppingDAL, shoppingDAL>();
//הזרקות של שכבת הבל
//********************
builder.Services.AddScoped<InterfaceCategoryBLL,categoryBLL>();
builder.Services.AddScoped<InterfaceCustomerBLL, customerBLL>();
builder.Services.AddScoped<InterfaceGameBLL, gameBLL>();
builder.Services.AddScoped<InterfacePurchaseDetailBLL, purchaseDetailBLL>();
builder.Services.AddScoped<InterfaceSoppingBLL, shoppingBLL>();

//DTO שייך לשכבת ה
builder.Services.AddAutoMapper(typeof(Program));

//הזרקת כל הנתונים מטבלאות
builder.Services.AddDbContext<GameStoreDBContext>
(options => options.UseSqlServer("Scaffold-DbContext \"Server=DESKTOP-L9S4R74;Database=GameStoreDB;TrustServerCertificate=True;Trusted_Connection=True;\" Microsoft.EntityFrameworkCore.SqlServer -OutputDir models"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //הרשאות
    app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()); //לריאקט
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();//חיבור לתמונות

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
