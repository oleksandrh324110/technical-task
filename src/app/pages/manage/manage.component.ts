import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Question } from '../../interfaces/question'
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

  removeQuestion(question: Question) {
    this.questionService.removeQuestion(question)
  }
}
