import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private  heroService : HeroService) { }

  heroes : Hero[] = [];
  selectedHero?: Hero;
  
  ngOnInit(): void {
    this.initialize();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  initialize(){
    this.heroes = this.heroService.getHeroes();
  }

}
