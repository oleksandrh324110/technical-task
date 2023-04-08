import { Component, HostListener } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { Question, QuestionType } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  QuestionType = QuestionType
  form = new FormGroup({
    text: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    answers: new FormArray<FormControl>([])
  })

  constructor(public questionService: QuestionService, private router: Router) {
    const valueToPatch = JSON.parse(localStorage.getItem('createFormData') ?? '{}')
    this.form.patchValue(valueToPatch)

    valueToPatch.answers?.forEach((answer: any, index: number) => {
      if (!answer) return
      this.form.controls.answers.push(new FormControl(answer, Validators.required))
    })

    this.checkType()

    this.form.valueChanges.subscribe((changes) => {
      this.checkType()
      localStorage.setItem('createFormData', JSON.stringify(changes))
    })
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.router.navigate(['/manage'])
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

  createQuestion() {
    const question: Question = {
      text: this.form.value.text ?? '',
      type: this.form.value.type as QuestionType,
      creatingDate: Date.now(),
      answers: this.form.value.type === QuestionType.OPEN ? undefined : this.form.value.answers
    }

    this.questionService.addQuestion(question)

    localStorage.removeItem('createFormData')
    this.router.navigate(['/manage'])
  }

  disabled() {
    if (this.form.value.type === QuestionType.OPEN && this.form.value.text)
      return false

    return this.form.invalid
  }
}
