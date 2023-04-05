import { Injectable } from '@angular/core'
import { Question } from '../interfaces/question'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions$ = new BehaviorSubject<Question[]>(JSON.parse(localStorage.getItem('questions') as string ?? '[]'))
  questions!: Question[]

  constructor() {
  }

  addQuestion(question: Question): void {
    console.log(question)
    this.questions = [...this.questions$.value, question]
    this.questions$.next(this.questions)
    localStorage.setItem('questions', JSON.stringify(this.questions))
  }

  removeQuestion(question: Question): void {
    this.questions = this.questions$.value.filter(i => i.creatingDate !== question.creatingDate)

    this.questions$.next(this.questions)
    localStorage.setItem('questions', JSON.stringify(this.questions))
  }
}
