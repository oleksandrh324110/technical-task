import { Component, Input } from '@angular/core'
import { Question, QuestionType } from '../../../interfaces/question'
import { FormGroup } from '@angular/forms'
import { QuestionService } from '../../../services/question.service'

@Component({
  selector: 'app-unanswered-question-card',
  templateUrl: './unanswered-question-card.component.html',
  styleUrls: ['./unanswered-question-card.component.scss']
})
export class UnansweredQuestionCardComponent {
  QuestionType = QuestionType
  form!: FormGroup

  @Input() question!: Question

  constructor(private questionService: QuestionService) {

  }

  answerQuestion(question: Question, form: FormGroup) {
    question.answerDate = Date.now()
    question.answer = form.value.answer

    this.questionService.answerQuestion(question)

    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')
  }
}
