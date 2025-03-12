import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // مسار تسجيل الدخول
  { path: 'register', component: RegisterComponent }, // مسار التسجيل
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // توجيه افتراضي إلى صفحة التسجيل
  { path: '**', redirectTo: '/register' } // توجيه أي مسار غير معروف إلى صفحة التسجيل

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
