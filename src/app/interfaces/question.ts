export enum QuestionType { SINGLE, MULTIPLE, OPEN}

export interface Question {
  text: string;
  type: QuestionType
  creatingDate: Date
  answerOptions?: string
}
