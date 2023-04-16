import { Component, Input } from '@angular/core'
import { Question } from '../../../../interfaces/question'

@Component({
  selector: 'app-answered-multiple-question',
  templateUrl: './answered-multiple-question.component.html',
  styleUrls: ['./answered-multiple-question.component.scss']
})
export class AnsweredMultipleQuestionComponent {
  @Input() question!: Question
}
