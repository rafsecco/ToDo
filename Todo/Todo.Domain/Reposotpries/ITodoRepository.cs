using Todo.Domain.Entities;

namespace Todo.Domain.Reposotpries;

public interface ITodoRepository
{
	void Create(TodoItem todo);

	void Update(TodoItem todo);

	TodoItem GetById(Guid id, string user);
}
