import { Component, Input, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup } from '@angular/forms'
import { Question } from '../../../../interfaces/question'
import { QuestionService } from '../../../../services/question.service'

@Component({
  selector: 'app-unanswered-multiple-question',
  templateUrl: './unanswered-multiple-question.component.html',
  styleUrls: ['./unanswered-multiple-question.component.scss']
})
export class UnansweredMultipleQuestionComponent implements OnInit {
  form: FormGroup = new FormGroup({
    answer: new FormArray([])
  })

  @Input() question!: Question

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    for (let answerOption of this.question.answerOptions!) {
      (<FormArray>this.form.controls['answer']).push(new FormControl(false))
    }
  }

  answerQuestion() {
    this.question.answerDate = Date.now()
    this.question.answer = this.form.value.answer

    this.questionService.answerQuestion(this.question)

    this.questionService.sortQuestions(this.questionService.unansweredQuestions$, 'asc', 'creatingDate')
    this.questionService.sortQuestions(this.questionService.answeredQuestions$, 'asc', 'answerDate')

  }
}
