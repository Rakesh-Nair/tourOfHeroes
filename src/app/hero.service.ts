import { Injectable } from '@angular/core';
import { Heroes } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(){
    return Heroes;
  }
}
