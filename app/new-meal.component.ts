import { EventEmitter, Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: "new-meal",
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add Another Meal:</h3>
    <input placeholder="Name" class="input-lg" #mealName> <br>
    <input placeholder="Details" class="input-lg" #mealDetails> <br>
    <input placeholder="Calories" class="input-lg" #mealCalories> <br>
    <button (click)="createMeal(mealName, mealDetails, mealCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>

  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  createMeal(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement) : void {
    var caloriesInt = parseInt(calories.value);
    var newMeal = new Meal(name.value, details.value, caloriesInt, 0);
    this.onSubmitNewMeal.emit(newMeal);
    name.value = "";
    details.value = "";
    calories.value = "";

  }
}
