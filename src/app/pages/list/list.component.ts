import { Component } from '@angular/core'
import { Question } from '../../interfaces/question'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  answeredQuestions!: Question[]
  unansweredQuestions!: Question[]
}
