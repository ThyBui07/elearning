import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { CourseListComponent } from './views/course-list/course-list.component';

const routes: Routes = [
  /* users */
 {path: '', component: HomeComponent},
 {path: 'signin', component: SignInComponent},
 {path: 'courses', component: CourseListComponent}
  /* admin */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
