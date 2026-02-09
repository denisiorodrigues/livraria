namespace Livraria.Infra.Entidades;

public class Livro
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Autor { get; set; }
    public string Genero { get; set; }
    public string Descricao { get; set; }

    public DateTime DataCriacao { get; set; } 
}