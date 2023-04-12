import { Component } from '@angular/core'
import { Question, QuestionType } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { BehaviorSubject } from 'rxjs'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  QuestionType = QuestionType
  unansweredQuestions$: BehaviorSubject<Question[]>
  answeredQuestions$: BehaviorSubject<Question[]>
  answerForms: FormGroup[] = []

  constructor(private questionService: QuestionService) {
    this.unansweredQuestions$ = this.questionService.unansweredQuestions$
    this.answeredQuestions$ = this.questionService.answeredQuestions$

    for (let unansweredQuestion of this.unansweredQuestions$.value) {
      if (!unansweredQuestion.answerOptions) return

      this.answerForms.push(
        new FormGroup({}))
      // @ts-ignore
      for (let option of unansweredQuestion.answerOptions) {
        console.log(option)
      }
    }
  }
}
