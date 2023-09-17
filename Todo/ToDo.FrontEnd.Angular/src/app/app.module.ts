import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TodayComponent } from './pages/today/today.component';
import { TomorrowComponent } from './pages/tomorrow/tomorrow.component';
import { AllComponent } from './pages/all/all.component';
import { NewComponent } from './pages/new/new.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		TodayComponent,
		TomorrowComponent,
		AllComponent,
		NewComponent,
		ButtonComponent,
		CardComponent,
		TabsComponent,
		TodoListComponent,
		UserCardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
