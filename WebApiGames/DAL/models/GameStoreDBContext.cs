using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.models
{
    public partial class GameStoreDBContext : DbContext
    {
        public GameStoreDBContext()
        {
        }

        public GameStoreDBContext(DbContextOptions<GameStoreDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Game> Games { get; set; } = null!;
        public virtual DbSet<PurchaseDetail> PurchaseDetails { get; set; } = null!;
        public virtual DbSet<Shopping> Shoppings { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-L9S4R74;Database=GameStoreDB;TrustServerCertificate=True;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("category_name");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.CreditInfo)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("credit_info");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.Property(e => e.GameId).HasColumnName("game_id");

                entity.Property(e => e.CategoryCode).HasColumnName("category_code");

                entity.Property(e => e.Picture)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("picture");

                entity.Property(e => e.Price)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("price");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("product_name");

                entity.Property(e => e.QuantityInStock).HasColumnName("quantity_in_stock");

                entity.HasOne(d => d.CategoryCodeNavigation)
                    .WithMany(p => p.Games)
                    .HasForeignKey(d => d.CategoryCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Games__category___3E52440B");
            });

            modelBuilder.Entity<PurchaseDetail>(entity =>
            {
                entity.HasKey(e => e.PurchaseDetailsId)
                    .HasName("PK__Purchase__E42B16C57B5BC706");

                entity.Property(e => e.PurchaseDetailsId).HasColumnName("purchase_details_id");

                entity.Property(e => e.GameCode).HasColumnName("game_code");

                entity.Property(e => e.PurchaseCode).HasColumnName("purchase_code");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.GameCodeNavigation)
                    .WithMany(p => p.PurchaseDetails)
                    .HasForeignKey(d => d.GameCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PurchaseD__game___46E78A0C");

                entity.HasOne(d => d.PurchaseCodeNavigation)
                    .WithMany(p => p.PurchaseDetails)
                    .HasForeignKey(d => d.PurchaseCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PurchaseD__purch__45F365D3");
            });

            modelBuilder.Entity<Shopping>(entity =>
            {
                entity.ToTable("Shopping");

                entity.Property(e => e.ShoppingId).HasColumnName("shopping_id");

                entity.Property(e => e.Amount)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("amount");

                entity.Property(e => e.CustomerCode).HasColumnName("customer_code");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.HasOne(d => d.CustomerCodeNavigation)
                    .WithMany(p => p.Shoppings)
                    .HasForeignKey(d => d.CustomerCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Shopping__custom__4316F928");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
