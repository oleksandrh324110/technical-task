import { Component, Input } from '@angular/core'
import { Question } from '../../../../interfaces/question'

@Component({
  selector: 'app-answered-open-question',
  templateUrl: './answered-open-question.component.html',
  styleUrls: ['./answered-open-question.component.scss']
})
export class AnsweredOpenQuestionComponent {
  @Input() question!: Question
}
