import { Component, HostListener } from '@angular/core'
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
    answerOptions: new FormArray<FormControl>([])
  })

  constructor(public questionService: QuestionService, private router: Router, private route: ActivatedRoute) {
    this.creatingDate = +this.route.snapshot.params['creatingDate']

    const valueToPatch: any = this.questionService.questions$.value.find((i: Question) => i.creatingDate === this.creatingDate)

    if (!valueToPatch) {
      this.router.navigate(['/manage'])
      return
    }

    this.form.patchValue(valueToPatch)

    valueToPatch.answerOptions?.forEach((answerOption: any) => {
      if (!answerOption) return
      this.form.controls.answerOptions.push(new FormControl(answerOption, Validators.required))
    })

    this.addMissingControls()

    this.form.valueChanges.subscribe(() => {
      this.addMissingControls()
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
    if (this.form.value.type === QuestionType.SINGLE) {
      if (!this.form.controls.answerOptions.controls.length) {
        this.form.controls.answerOptions.push(new FormControl('', Validators.required))
      }
    } else if (this.form.value.type === QuestionType.MULTIPLE) {
      while (this.form.controls.answerOptions.length < 2) {
        this.form.controls.answerOptions.push(new FormControl('', Validators.required))
      }
    }
  }

  editQuestion() {
    const question: Question = {
      text: this.form.value.text ?? '',
      type: this.form.value.type as QuestionType,
      creatingDate: this.creatingDate,
      answerOptions: this.form.value.type === QuestionType.OPEN ? undefined : this.form.value.answerOptions
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
