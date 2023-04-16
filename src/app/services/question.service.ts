import { Injectable } from '@angular/core'
import { Question } from '../interfaces/question'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions$ = new BehaviorSubject<Question[]>(JSON.parse(localStorage.getItem('questions') ?? '[]'))
  unansweredQuestions$ = new BehaviorSubject<Question[]>([])
  answeredQuestions$ = new BehaviorSubject<Question[]>([])
  questions!: Question[]

  constructor() {
    this.questions$.subscribe((questions) => {
      this.unansweredQuestions$?.next(questions.filter((i) => !i.answer))
      this.answeredQuestions$?.next(questions.filter((i) => !!i.answer))
    })
  }

  sortQuestions(questions$: BehaviorSubject<Question[]>, sortOrder: 'asc' | 'desk' = 'asc', sortKey: keyof Question) {
    let questions = questions$.value.sort((a: any, b: any) => {
      if (a[sortKey] > b[sortKey]) {
        return -1
      } else if (a[sortKey] < b[sortKey]) {
        return 1
      }
      return 0
    })

    if (sortOrder === 'desk')
      questions = questions?.reverse()

    questions$.next(questions)
  }

  addQuestion(question: Question): void {
    this.questions = [...this.questions$.value, question]
    this.questions$.next(this.questions)

    localStorage.setItem('questions', JSON.stringify(this.questions))
  }

  removeQuestion(question: Question): void {
    this.questions = this.questions$.value.filter(i => i.creatingDate !== question.creatingDate)
    this.questions$.next(this.questions)

    localStorage.setItem('questions', JSON.stringify(this.questions))
  }

  editQuestion(question: Question) {
    this.questions = this.questions$.value.filter(i => i.creatingDate !== question.creatingDate)
    this.questions = [...this.questions, question]
    this.questions$.next(this.questions)

    localStorage.setItem('questions', JSON.stringify(this.questions))
  }

  answerQuestion(question: Question) {
    this.editQuestion(question)
  }

  removeTheAnswerToQuestion(question: Question) {
    this.editQuestion((question))
  }
}
