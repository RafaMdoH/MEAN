import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen.component';
import { QUESTION_ROUTER } from './question/question.routing';

const routes: Routes = [
  {path: '', component: QuestionListComponent},
  {path: 'signin', component: SigninScreenComponent},
  {path: 'signup', component: SignupScreenComponent},
  {path: 'question', children: QUESTION_ROUTER}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
