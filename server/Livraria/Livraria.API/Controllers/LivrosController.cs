using Livraria.API.Models;
using Livraria.Infra.Contextos;
using Livraria.Infra.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Livraria.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LivrosController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    
    public LivrosController(ApplicationDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var livros = await _context.Livros.ToListAsync();
        
        var livrosDto = livros.Select(livro => 
            new VisualizarLivroDTO(livro.Titulo,  livro.Autor, livro.Genero,  livro.Descricao));
        
        return Ok(livrosDto);
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> ObterPorId(int id)
    {
        var livro = await _context.Livros.FirstOrDefaultAsync(l => l.Id == id);
        
        if(livro is null) return NotFound();
        
        return Ok(livro);
    }

    [HttpPost]
    public async Task<IActionResult> Adicionar([FromBody] CadastrarLivroDTO livroDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        var livro = new Livro();
        
        livro.Titulo = livroDto.Titulo;
        livro.Autor = livroDto.Autor;
        livro.Genero = livroDto.Genero;
        livro.Descricao = livroDto.Descricao;
        livro.DataCriacao = DateTime.Now;
        
        _context.Livros.Add(livro);
        _context.SaveChanges();

        var livroParaVisualizar = new VisualizarLivroDTO(livro.Titulo, livro.Autor, livro.Genero, livro.Descricao);
        return CreatedAtAction("ObterPorId", new { id = livro.Id }, livroParaVisualizar);
    }
}