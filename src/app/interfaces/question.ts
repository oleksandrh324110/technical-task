export enum QuestionType {
  SINGLE = 'A single question',
  MULTIPLE = 'Multiple question',
  OPEN = 'Open question'
}

export interface Question {
  id: number
  text: string
  type: QuestionType
  creatingDate: number
  answerOptions?: string
}
