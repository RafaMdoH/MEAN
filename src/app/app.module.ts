import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material Angualar
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import 'hammerjs';
//ngx-moment
import { MomentModule } from 'ngx-moment';
//Mis Componentes
import { QuestionDetailComponent } from './question/question-detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
