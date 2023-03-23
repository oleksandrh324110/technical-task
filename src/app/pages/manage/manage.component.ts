import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Question, QuestionType } from '../../interfaces/question'
import { QuestionService } from '../../services/question.service'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageComponent implements OnInit {
  constructor(public questionService: QuestionService) {
  }

  ngOnInit(): void {
  }

  getQuestions(): Question[] {
    return this.questionService.getQuestions()
  }

  createQuestion() {
    this.questionService.addQuestion({ text: 'lorem', creatingDate: Date.now(), id: 0, type: QuestionType.SINGLE })
  }
}
