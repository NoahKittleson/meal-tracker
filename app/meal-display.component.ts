import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: "meal-display",
  inputs: ['meal'],
  template: `
    <h3> {{ meal.name }} </h3>
    <p *ngIf="meal.details"> {{ meal.details }} </p>
    <p> {{ meal.calories }} </p>
    <hr>
  `
})
export class MealDisplayComponent {
  public meal: Meal;

}
