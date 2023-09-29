import { Component } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {
	constructor(private authService: AuthService) { }

	login() {
		this.authService.GoogleAuth();
	}
}