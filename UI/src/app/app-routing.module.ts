import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationCheck } from './common/authorization-check';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
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
