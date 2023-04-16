import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'

import { ListComponent } from './pages/list/list.component'
import { AppComponent } from './app.component'
import { ManageComponent } from './pages/manage/manage.component'
import { CreateComponent } from './pages/create/create.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio'
import { EditComponent } from './pages/edit/edit.component'
import { AutofocusDirective } from './directives/autofocus.directive'
import { MatCheckboxModule } from '@angular/material/checkbox'
import {
  UnansweredOpenQuestionComponent
} from './pages/list/unanswered-question-card/unanswered-open-question/unanswered-open-question.component'
import {
  UnansweredSingleQuestionComponent
} from './pages/list/unanswered-question-card/unanswered-single-question/unanswered-single-question.component'
import {
  UnansweredMultipleQuestionComponent
} from './pages/list/unanswered-question-card/unanswered-multiple-question/unanswered-multiple-question.component'
import {
  AnsweredMultipleQuestionComponent
} from './pages/list/answered-question-card/answered-multiple-question/answered-multiple-question.component'
import {
  AnsweredSingleQuestionComponent
} from './pages/list/answered-question-card/answered-single-question/answered-single-question.component'
import {
  AnsweredOpenQuestionComponent
} from './pages/list/answered-question-card/answered-open-question/answered-open-question.component'
import {
  UnansweredQuestionCardComponent
} from './pages/list/unanswered-question-card/unanswered-question-card.component'
import { AnsweredQuestionCardComponent } from './pages/list/answered-question-card/answered-question-card.component'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ManageComponent,
    CreateComponent,
    EditComponent,
    AutofocusDirective,

    UnansweredQuestionCardComponent,
    UnansweredOpenQuestionComponent,
    UnansweredSingleQuestionComponent,
    UnansweredMultipleQuestionComponent,

    AnsweredQuestionCardComponent,
    AnsweredMultipleQuestionComponent,
    AnsweredSingleQuestionComponent,
    AnsweredOpenQuestionComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
