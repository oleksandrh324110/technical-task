import { Component } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { Question, QuestionType } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  QuestionType = QuestionType
  creatingDate!: number

  form = new FormGroup({
    text: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    answers: new FormArray<FormControl>([])
  })

  constructor(public questionService: QuestionService, private router: Router, private route: ActivatedRoute) {
    this.creatingDate = +this.route.snapshot.params['creatingDate']

    const valueToPatch: any = this.questionService.questions$.value.find((i: Question) => i.creatingDate === this.creatingDate)

    this.form.patchValue(valueToPatch)

    valueToPatch.answers?.forEach((answer: any) => {
      if (!answer) return
      this.form.controls.answers.push(new FormControl(answer, Validators.required))
    })

    this.checkType()
  }

  removeAnswer(i: number) {
    this.form.controls.answers.removeAt(i)
  }

  addAnswer() {
    this.form.controls.answers.push(new FormControl('', Validators.required))
  }

  checkType() {
    if (this.form.value.type === QuestionType.SINGLE) {
      if (!this.form.controls.answers.controls.length) {
        this.form.controls.answers.push(new FormControl('', Validators.required))
      }
    } else if (this.form.value.type === QuestionType.MULTIPLE) {
      while (this.form.controls.answers.length < 2) {
        this.form.controls.answers.push(new FormControl('', Validators.required))
      }
    }
  }

  editQuestion() {
    const question: Question = {
      text: this.form.value.text ?? '',
      type: this.form.value.type as QuestionType,
      creatingDate: this.creatingDate,
      answers: this.form.value.type === QuestionType.OPEN ? undefined : this.form.value.answers
    }

    this.questionService.editQuestion(question)

    this.router.navigate(['/manage'])
  }

  disabled() {
    if (this.form.value.type === QuestionType.OPEN && this.form.value.text)
      return false

    return this.form.invalid
  }
}
