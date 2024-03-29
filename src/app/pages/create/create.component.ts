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
    answerOptions: new FormArray<FormControl>([])
  })

  constructor(public questionService: QuestionService, private router: Router) {
    const valueToPatch = JSON.parse(localStorage.getItem('createFormData') ?? '{}')

    this.form.patchValue(valueToPatch)

    valueToPatch.answerOptions?.forEach((answerOption: any) => {
      if (!answerOption) return
      this.form.controls.answerOptions.push(new FormControl(answerOption, Validators.required))
    })

    this.addMissingControls()

    this.form.valueChanges.subscribe((changes) => {
      this.addMissingControls()

      localStorage.setItem('createFormData', JSON.stringify(changes))
    })
  }

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    this.router.navigate(['/manage'])
  }

  removeAnswer(i: number) {
    this.form.controls.answerOptions.removeAt(i)
  }

  addAnswer() {
    this.form.controls.answerOptions.push(new FormControl('', Validators.required))
  }

  addMissingControls() {
    while (this.form.controls.answerOptions.length < 2) {
      this.form.controls.answerOptions.push(new FormControl('', Validators.required))
    }
  }

  createQuestion() {
    const question: Question = {
      text: this.form.value.text ?? '',
      type: this.form.value.type as QuestionType,
      creatingDate: Date.now(),
      answerOptions: this.form.value.type === QuestionType.OPEN ? undefined : this.form.value.answerOptions
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
