export enum QuestionType {
  SINGLE = 'A single choice',
  MULTIPLE = 'Multiple choice',
  OPEN = 'Open option'
}

export interface Question {
  id: number
  text: string
  type: QuestionType
  creatingDate: number
  answerOptions?: string
}
