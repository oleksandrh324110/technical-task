import { Component, OnInit } from '@angular/core'
import { Question } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  questions$!: BehaviorSubject<Question[]>

  constructor(public questionService: QuestionService) {
    this.questionService.sortQuestions(this.questionService.questions$, 'asc', 'creatingDate')
    this.questions$ = this.questionService.questions$
  }

  ngOnInit(): void {
  }

  removeQuestion(question: Question) {
    this.questionService.removeQuestion(question)
  }
}
