using Microsoft.AspNetCore.Mvc;
using Todo.Domain.Commands;
using Todo.Domain.Entities;
using Todo.Domain.Handlers;
using Todo.Domain.Reposotpries;

namespace Todo.Api.Controllers;

[ApiController]
[Route("v1/todos")]
public class TodoController : ControllerBase
{
	#region HttpGet
	[Route("")]
	[HttpGet]
	public IEnumerable<TodoItem> GetAll(
		[FromServices] ITodoRepository repository
	)
	{
		return repository.GetAll("rafaelsecco");
	}

	[Route("done")]
	[HttpGet]
	public IEnumerable<TodoItem> GetAllDone(
		[FromServices] ITodoRepository repository
	)
	{
		return repository.GetAllDone("rafaelsecco");
	}

	[Route("undone")]
	[HttpGet]
	public IEnumerable<TodoItem> GetAllUndone(
		[FromServices] ITodoRepository repository
	)
	{
		return repository.GetAllUndone("rafaelsecco");
	}

	[Route("done/today")]
	[HttpGet]
	public IEnumerable<TodoItem> GetDoneForToday(
		[FromServices] ITodoRepository repository
	)
	{
		return repository.GetByPeriod("rafaelsecco", DateTime.Now.Date, true);
	}

	[Route("undone/today")]
	[HttpGet]
	public IEnumerable<TodoItem> GetUndoneForToday(
		[FromServices] ITodoRepository repository
	)
	{
		return repository.GetByPeriod("rafaelsecco", DateTime.Now.Date, false);
	}

	[Route("done/tomorrow")]
	[HttpGet]
	public IEnumerable<TodoItem> GetDoneForTomorrow(
		[FromServices] ITodoRepository repository
	)
	{
		return repository.GetByPeriod("rafaelsecco", DateTime.Now.Date.AddDays(1), true);
	}

	[Route("undone/tomorrow")]
	[HttpGet]
	public IEnumerable<TodoItem> GetUndoneForTomorrow(
		[FromServices] ITodoRepository repository
	)
	{
		return repository.GetByPeriod("rafaelsecco", DateTime.Now.Date.AddDays(1), false);
	}

	#endregion

	#region HttpPost
	[Route("")]
	[HttpPost]
	public GenericCommandResult Create(
		[FromBody] CreateTodoCommand command,
		[FromServices] TodoHandler handler
	)
	{
		command.User = "rafaelsecco";
		return (GenericCommandResult)handler.Handle(command);
	}
	#endregion

	#region HttpPut
	[Route("")]
	[HttpPut]
	public GenericCommandResult Put(
		[FromBody] UpdateTodoCommand command,
		[FromServices] TodoHandler handler
	)
	{
		command.User = "rafaelsecco";
		return (GenericCommandResult)handler.Handle(command);
	}

	[Route("mark-as-done")]
	[HttpPut]
	public GenericCommandResult MarkAsDone(
		[FromBody] MarkTodoAsDoneCommand command,
		[FromServices] TodoHandler handler
	)
	{
		command.User = "rafaelsecco";
		return (GenericCommandResult)handler.Handle(command);
	}

	[Route("mark-as-undone")]
	[HttpPut]
	public GenericCommandResult MarkAsUndone(
		[FromBody] MarkTodoAsUndoneCommand command,
		[FromServices] TodoHandler handler
	)
	{
		command.User = "rafaelsecco";
		return (GenericCommandResult)handler.Handle(command);
	}
	#endregion
}