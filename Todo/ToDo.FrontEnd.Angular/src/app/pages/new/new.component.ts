import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { User } from 'src/app/shared/services/user';

//E:\@Studies\Balta_io\TodoApp_APIcomASPNETCoreCQRS_EFCore\Projeto\src\Todo\ToDo.FrontEnd.Angular\src\app\shared\services\user.ts

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	public form: FormGroup;
	public user: User;

	constructor(
		private fb: FormBuilder,
		private service: DataService,
		private router: Router,
		private afAuth: AngularFireAuth,
		public authService: AuthService
	) {
		this.form = this.fb.group({
			title: ['', Validators.compose([
				Validators.minLength(3),
				Validators.maxLength(60),
				Validators.required,
			])],
			date: [new Date().toJSON().substring(0, 10), Validators.required],
			user: [JSON.parse(localStorage.getItem('user')!).uid, Validators.required]
		});
	}

	ngOnInit(): void {
	}

	submit() {
		this.afAuth.idToken.subscribe(token => {
			this.service.postTodo(this.form.value, token)
				.subscribe(res => {
					this.router.navigateByUrl("all");
				});
		});
	}
}
