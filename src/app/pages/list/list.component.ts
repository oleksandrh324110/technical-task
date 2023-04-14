import { Component } from '@angular/core'
import { Question, QuestionType } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
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
  answerForms: FormGroup[] = []

  constructor(private questionService: QuestionService) {
    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')

    this.unansweredQuestions$ = this.questionService.unansweredQuestions$
    this.answeredQuestions$ = this.questionService.answeredQuestions$

    for (const unansweredQuestion of this.unansweredQuestions$.value) {
      this.answerForms.push(new FormGroup({
        answer: new FormControl('', Validators.required)
      }))
    }
  }

  answerQuestion(question: Question, form: FormGroup) {
    question.answerDate = Date.now()
    question.answer = form.value.answer

    this.answerForms = this.answerForms.filter(i => i !== form)

    this.questionService.answerQuestion(question)

    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')
  }

  removeTheAnswerToQuestion(question: Question) {
    delete question.answerDate
    delete question.answer

    this.answerForms.push(new FormGroup({
      answer: new FormControl('', Validators.required)
    }))

    this.questionService.removeTheAnswerToQuestion(question)

    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')
  }
}
