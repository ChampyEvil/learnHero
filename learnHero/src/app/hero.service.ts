import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  //Original Version
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //Observable Version
  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes')
    return of (HEROES);
  }
}
