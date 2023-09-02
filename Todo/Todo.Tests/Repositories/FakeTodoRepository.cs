using Todo.Domain.Entities;
using Todo.Domain.Reposotpries;

namespace Todo.Tests.Repositories;

public class FakeTodoRepository : ITodoRepository
{
	public void Create(TodoItem todo)
	{
	}

	public void Update(TodoItem todo)
	{
	}
	public TodoItem GetById(Guid id, string user)
	{
		return new TodoItem("Título aqui", "Rafael Secco", DateTime.Now);
	}
}
