import { Injectable, OnInit } from '@angular/core';
import { Question } from "../interfaces/question";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService implements OnInit {
  questions$?: Subject<Question[]>

  constructor() {
  }

  ngOnInit(): void {
    this.questions$ = new BehaviorSubject(JSON.parse(localStorage.getItem('questions') || ''))

  }
}
