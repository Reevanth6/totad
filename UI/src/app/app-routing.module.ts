import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationCheck } from './common/authorization-check';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotComponent, pathMatch: 'full' },
  { path: 'sign-up', component: RegisterComponent, pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, data: { title: 'home' }},
  // { path: 'about', component: AboutComponent},
  // { path: 'category', component: CategoryComponent},
  // { path: 'contact', component: ContactComponent},
  // { path: 'Assessment/:id', component: AssessmentComponent, canActivate: [AuthorizationCheck] },
  // { path:'admin',loadChildren: 'src/app/admin/admin.module#AdminModule'},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
