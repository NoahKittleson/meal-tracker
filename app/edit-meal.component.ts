import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h3>Edit Name: {{ meal.name }}</h3>
      <input [(ngModel)]="meal.name" class="col-sm-3 input-lg meal-form"/>
      <h3>Edit Details: {{ meal.details }}</h3>
      <input [(ngModel)]="meal.details" class="col-sm-3 input-lg meal-form"/>
      <h3>Edit Calories: {{ meal.calories }}</h3>
      <input [(ngModel)]="meal.description" class="col-sm-3 input-lg meal-form"/>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
