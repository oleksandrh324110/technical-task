export enum QuestionType {
  SINGLE = 'A single choice',
  MULTIPLE = 'Multiple choice',
  OPEN = 'Open option'
}

export interface Question {
  text: string
  type: QuestionType
  creatingDate: number
  answerDate?: number
  answerOptions?: string[]
  answer?: string | string[]
}
