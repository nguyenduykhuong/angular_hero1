import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    dateOfBird:'01/01/1990',power:100
  };

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {

    // this.heroes =
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
