import { Component, Input } from '@angular/core'
import { Question } from '../../../../interfaces/question'

@Component({
  selector: 'app-answered-single-question',
  templateUrl: './answered-single-question.component.html',
  styleUrls: ['./answered-single-question.component.scss']
})
export class AnsweredSingleQuestionComponent {
  @Input() question!: Question
}
