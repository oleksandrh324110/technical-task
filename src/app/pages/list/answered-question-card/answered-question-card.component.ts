import { Component, Input } from '@angular/core'
import { Question, QuestionType } from '../../../interfaces/question'
import { QuestionService } from '../../../services/question.service'

@Component({
  selector: 'app-answered-question-card',
  templateUrl: 'answered-question-card.component.html',
  styleUrls: ['answered-question-card.component.scss']
})
export class AnsweredQuestionCardComponent {
  QuestionType = QuestionType

  @Input() question!: Question

  constructor(private questionService: QuestionService) {
  }

  removeTheAnswerToQuestion(question: Question) {
    delete question.answerDate
    delete question.answer

    this.questionService.removeTheAnswerToQuestion(question)

    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')
  }
}