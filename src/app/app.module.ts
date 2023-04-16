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
  UnansweredQuestionCardComponent
} from './shared/components/unanswered-question-card/unanswered-question-card.component'
import {
  AnsweredQuestionCardComponent
} from './shared/components/answered-question-card/answered-question-card.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ManageComponent,
    CreateComponent,
    EditComponent,
    AutofocusDirective,
    UnansweredQuestionCardComponent,
    AnsweredQuestionCardComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
