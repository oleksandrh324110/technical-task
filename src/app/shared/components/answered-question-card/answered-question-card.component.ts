import { Component, Input } from '@angular/core'
import { Question, QuestionType } from '../../../interfaces/question'

@Component({
  selector: 'app-answered-question-card',
  templateUrl: './answered-question-card.component.html',
  styleUrls: ['./answered-question-card.component.scss']
})
export class AnsweredQuestionCardComponent {
  QuestionType = QuestionType

  @Input() question!: Question
}
