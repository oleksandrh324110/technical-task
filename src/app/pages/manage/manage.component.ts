import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Question, QuestionType } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageComponent implements OnInit {
  questions$: BehaviorSubject<Question[]>
  i = 0

  constructor(public questionService: QuestionService) {
    this.questions$ = this.questionService.questions$
  }

  ngOnInit(): void {
  }

  createQuestion() {
    this.questionService.addQuestion({
      text: 'lorem',
      creatingDate: Date.now(),
      id: this.i++,
      type: QuestionType.SINGLE
    })
  }

  removeQuestion(question: Question) {
    this.questionService.removeQuestion(question)
  }
}
