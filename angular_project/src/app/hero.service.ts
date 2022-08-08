import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    console.log(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
