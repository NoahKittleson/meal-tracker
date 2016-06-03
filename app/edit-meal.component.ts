import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <div class="row">
        <div class="col-md-3">
          <h3>Name:</h3>
        </div>
        <div class="col-md-3">
          <input [(ngModel)]="meal.name" class="input-lg meal-form"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <h3>Details:</h3>
        </div>
        <div class="col-md-3">
          <input [(ngModel)]="meal.details" class="input-lg meal-form"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <h3>Calories:</h3>
        </div>
        <div class="col-md-3">
          <input [(ngModel)]="meal.calories" class="input-lg meal-form"/>
        </div>
      </div>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
