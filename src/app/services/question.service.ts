import { Injectable } from '@angular/core'
import { Question } from '../interfaces/question'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions!: Question[]

  constructor() {
    if (!localStorage.getItem('questions')) {
      localStorage.setItem('questions', '[]')
    }

    this.questions = JSON.parse(localStorage.getItem('questions') as string)
  }

  getQuestions(): Question[] {
    return this.questions
  }

  addQuestion(question: Question): void {
    this.questions = [...this.questions, question]
    localStorage.setItem('questions', JSON.stringify(this.questions))
  }

  // removeQuestion(question: Question): void {
  //   this.questions = this.questions$.value.filter(i => i.text !== question.text)
  //
  //   localStorage.setItem('questions', JSON.stringify(this.questions))
  //   this.questions$.next(this.questions)
  // }

  // editQuestion(question: Question): void {
  //   this.questions = this.questions$.value
  // }
}
