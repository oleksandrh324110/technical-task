import { Component } from '@angular/core'
import { Question, QuestionType } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  QuestionType = QuestionType
  unansweredQuestions$: BehaviorSubject<Question[]>
  answeredQuestions$: BehaviorSubject<Question[]>

  constructor(private questionService: QuestionService) {
    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')

    this.unansweredQuestions$ = this.questionService.unansweredQuestions$
    this.answeredQuestions$ = this.questionService.answeredQuestions$
  }

  removeTheAnswerToQuestion(question: Question) {
    delete question.answerDate
    delete question.answer

    this.questionService.removeTheAnswerToQuestion(question)

    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')
  }
}
