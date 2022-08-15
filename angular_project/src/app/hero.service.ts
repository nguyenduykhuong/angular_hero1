import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:8080/get-all-hero';  // URL to web api
  constructor(private http: HttpClient) { }
  getHeroes1(): Hero[] {
    return HEROES;
  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    console.log(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
