export enum QuestionType {
  SINGLE = 'A single choice',
  MULTIPLE = 'Multiple choice',
  OPEN = 'Open option'
}

export interface Question {
  text: string
  type: QuestionType
  creatingDate: number
  answerOptions?: {}
  answer?: string
  answerDate?: number
}
