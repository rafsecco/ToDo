import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	//public baseUrl = "https://localhost:5001";
	public baseUrl = "http://localhost:5134";

	constructor(
		private http: HttpClient
	) { }

	public composeHeaders(token: any) : any {
		if (token) {
			const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
			return headers;
		} else {
			return null;
		}
	}

	public getTodayTodos(token: any) {
		return this.http.get(`${this.baseUrl}/v1/todos/undone/today`, { headers: this.composeHeaders(token) });
	}

	public getTomorrowTodos(token: any) {
		return this.http.get(`${this.baseUrl}/v1/todos/undone/tomorrow`, { headers: this.composeHeaders(token) });
	}

	public getAllTodos(token: any) {
		return this.http.get(`${this.baseUrl}/v1/todos`, { headers: this.composeHeaders(token) });
	}

	public postTodo(data: any, token: any) {
		return this.http.post(`${this.baseUrl}/v1/todos`, data, { headers: this.composeHeaders(token) });
	}

	public markAsDone(data: any, token: any) {
		return this.http.put(`${this.baseUrl}/v1/todos/mark-as-done`, data, { headers: this.composeHeaders(token) });
	}
}
