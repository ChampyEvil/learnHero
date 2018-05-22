import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // for onSelected
  selectHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // for onSelect
  // onSelect(hero: Hero): void{
  //   this.selectHero = hero;
  // }

  //Original Version
  // getHeroes(): void{
  //   this.heroes = this.heroSevice.getHeroes();
  // }
  //==============================================

  //Observable Version
  getHeroes(): void{
    this.heroService.getHeroes().subscribe( heroes =>
      this.heroes = heroes
    );
  }
  //==============================================
}
