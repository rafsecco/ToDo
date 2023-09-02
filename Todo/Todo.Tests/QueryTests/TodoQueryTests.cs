using Todo.Domain.Entities;
using Todo.Domain.Queries;

namespace Todo.Tests.QueryTests;

[TestClass]
public class TodoQueryTests
{
	private List<TodoItem> _items;

	public TodoQueryTests()
	{
		_items = new List<TodoItem>();
		_items.Add(new TodoItem("Tarefa 1", "usuarioA", DateTime.Now));
		_items.Add(new TodoItem("Tarefa 2", "usuarioA", DateTime.Now));
		_items.Add(new TodoItem("Tarefa 3", "rafaelsecco", DateTime.Now));
		_items.Add(new TodoItem("Tarefa 4", "usuarioA", DateTime.Now));
		_items.Add(new TodoItem("Tarefa 5", "rafaelsecco", DateTime.Now));
	}

	[TestMethod]
	public void Data_a_consulta_deve_retornar_tarefas_apenas_do_usuario_rafaelsecco()
	{
		var result = _items.AsQueryable().Where(TodoQueries.GetAll("rafaelsecco"));
		Assert.AreEqual(2, result.Count());
	}
}
