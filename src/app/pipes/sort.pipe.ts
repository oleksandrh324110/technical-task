import { Injectable, Pipe, PipeTransform } from '@angular/core'
import { Question } from '../interfaces/question'

export type SortOrder = 'asc' | 'desc';

@Injectable()
@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {
  transform(value: Question[] | null, sortOrder: SortOrder | string = 'asc', sortKey: keyof Question): Question[] {
    return value?.sort((a: any, b: any) => {
      if (a[sortKey] > b[sortKey]) {
        return -1
      } else if (a[sortKey] < b[sortKey]) {
        return 1
      }
      return 0
    }) as Question[]
  }
}
