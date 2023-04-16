import { Component, Input } from '@angular/core'
import { Question, QuestionType } from '../../../interfaces/question'

@Component({
  selector: 'app-unanswered-question-card',
  templateUrl: 'unanswered-question-card.component.html',
  styleUrls: ['unanswered-question-card.component.scss']
})
export class UnansweredQuestionCardComponent {
  QuestionType = QuestionType

  @Input() question!: Question
}