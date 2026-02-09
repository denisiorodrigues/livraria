using Livraria.Infra.Entidades;
using Microsoft.EntityFrameworkCore;

namespace Livraria.Infra.Contextos;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    
    public DbSet<Livro> Livros { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configurações do modelo
        modelBuilder.Entity<Livro>()
            .HasKey(u => u.Id);
                
        modelBuilder.Entity<Livro>()
            .Property(u => u.Titulo)
            .IsRequired()
            .HasMaxLength(100);
                
        modelBuilder.Entity<Livro>()
            .Property(u => u.Autor)
            .IsRequired()
            .HasMaxLength(150);
        
        modelBuilder.Entity<Livro>()
            .Property(u => u.Genero)
            .IsRequired()
            .HasMaxLength(100);
        
        modelBuilder.Entity<Livro>()
            .Property(u => u.Descricao)
            .HasMaxLength(500);
    }
}