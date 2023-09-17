import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/data.service';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	@Input() todos!: any | null;

	constructor(
		private service: DataService,
		private afAuth: AngularFireAuth,
	) { }

	ngOnInit(): void {
	}

	markAsDone(todo: any) {
		this.afAuth.idToken.subscribe(token => {
			const data = { id: todo.id };
			this.service.markAsDone(data, token).subscribe(res => { todo.done = true });
		});
	}
}
