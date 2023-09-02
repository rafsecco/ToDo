using Microsoft.EntityFrameworkCore;
using Todo.Domain.Handlers;
using Todo.Domain.Reposotpries;
using Todo.Infra.Contexts;
using Todo.Infra.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(opt => opt.UseInMemoryDatabase("Database"));
//builder.Services.AddDbContext<DataContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("")));
builder.Services.AddTransient<ITodoRepository, TodoRepository>();
builder.Services.AddTransient<TodoHandler, TodoHandler>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();
app.UseCors(x => x
	.AllowAnyOrigin()
	.AllowAnyOrigin()
	.AllowAnyMethod()
	.AllowAnyHeader());

app.UseAuthentication();
app.UseAuthorization();

//app.MapGet("/weatherforecast", () =>
//{
//	var forecast = Enumerable.Range(1, 5).Select(index =>
//		new WeatherForecast
//		(
//			DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
//			Random.Shared.Next(-20, 55),
//			summaries[Random.Shared.Next(summaries.Length)]
//		))
//		.ToArray();
//	return forecast;
//})
//.WithName("GetWeatherForecast")
//.WithOpenApi();

app.Run();
