import { Component } from '@angular/core'
import { Question } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  unansweredQuestions$: BehaviorSubject<Question[]>
  answeredQuestions$: BehaviorSubject<Question[]>

  constructor(private questionService: QuestionService) {
    this.unansweredQuestions$ = this.questionService.unansweredQuestions$
    this.answeredQuestions$ = this.questionService.answeredQuestions$
  }
}
