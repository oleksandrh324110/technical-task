import { Component, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Question } from '../../../../interfaces/question'
import { QuestionService } from '../../../../services/question.service'

@Component({
  selector: 'app-unanswered-open-question',
  templateUrl: './unanswered-open-question.component.html',
  styleUrls: ['./unanswered-open-question.component.scss']
})
export class UnansweredOpenQuestionComponent {
  form: FormGroup = new FormGroup({
    answer: new FormControl('', Validators.required)
  })

  @Input() question!: Question

  constructor(private questionService: QuestionService) {
  }

  answerQuestion() {
    this.question.answerDate = Date.now()
    this.question.answer = this.form.value.answer

    this.questionService.answerQuestion(this.question)

    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')
  }
}
