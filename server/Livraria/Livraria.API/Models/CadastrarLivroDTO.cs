using System.ComponentModel.DataAnnotations;

namespace Livraria.API.Models;

public record CadastrarLivroDTO(
    [Required(ErrorMessage = "O título é obrigatório.")]
    [StringLength(100, MinimumLength = 2, ErrorMessage = "O título deve ter entre 2 e 100 caracteres.")]
    string Titulo,

    [Required(ErrorMessage = "O autor é obrigatório.")]
    [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "O nome do autor deve conter apenas letras.")]
    string Autor,

    [Required(ErrorMessage = "O gênero deve ser especificado.")]
    string Genero,

    [Required(ErrorMessage = "A descrição não pode estar vazia.")]
    [MinLength(10, ErrorMessage = "A descrição precisa de pelo menos 10 caracteres.")]
    [MaxLength(500, ErrorMessage = "A descrição não pode exceder 500 caracteres.")]
    string Descricao);
