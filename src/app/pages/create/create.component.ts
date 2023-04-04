import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { QuestionType } from '../../interfaces/question'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  QuestionType = QuestionType

  form = new FormGroup({
    question: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  })
}
