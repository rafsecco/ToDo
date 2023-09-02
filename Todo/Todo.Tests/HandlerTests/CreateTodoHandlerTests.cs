using Todo.Domain.Commands;
using Todo.Domain.Handlers;
using Todo.Tests.Repositories;

namespace Todo.Tests.HandlerTests;

[TestClass]
public class CreateTodoHandlerTests
{
	private readonly CreateTodoCommand _invalidCommand = new("", "", DateTime.Now);
	private readonly CreateTodoCommand _validCommand = new("Título da tarefa", "Rafael Secco", DateTime.Now);
	private readonly TodoHandler _handler = new(new FakeTodoRepository());
	private GenericCommandResult _result = new GenericCommandResult();

	[TestMethod]
	public void Dado_um_comando_invalido_deve_interromper_a_execucao()
	{
		//var result = (GenericCommandResult)_handler.Handle(_invalidCommand);
		_result = (GenericCommandResult)_handler.Handle(_invalidCommand);
		Assert.AreEqual(_result.Success, false);
	}

	[TestMethod]
	public void Dado_um_comando_valido_deve_criar_a_tarefa()
	{
		//var result = (GenericCommandResult)_handler.Handle(_validCommand);
		_result = (GenericCommandResult)_handler.Handle(_validCommand);
		Assert.AreEqual(_result.Success, true);
	}
}