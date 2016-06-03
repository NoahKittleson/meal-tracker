import { EventEmitter, Component } from 'angular2/core';
import { MealDisplayComponent } from './meal-display.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';
import { Meal } from './meal.model';

@Component ({
  selector: "meal-list",
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent, NewMealComponent, EditMealComponent],
  pipes: [CaloriesPipe],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="done">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <input placeholder="calorie count" class="col-sm-8 input-lg" #calorieCount>
    <button (click)="submitFilter(calorieCount)">filter</button>

    <meal-display *ngFor="#meal of mealList | calories:calorieFilter"
    (click)="mealClicked(meal)"
    [class.selected]="meal === selectedMeal"
    [meal]="meal">
    </meal-display>
    <div class="container">
      <new-meal (onSubmitNewMeal)="addMeal($event)">
      </new-meal>
    </div>

    <br>
    <edit-meal *ngIf="selectedMeal"
    [meal] = "selectedMeal">
    </edit-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public calorieFilter: number = 0;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal) : void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  addMeal(newMeal: Meal) : void {
    newMeal.id = this.mealList.length;
    this.mealList.push(newMeal);
  }
  submitFilter(calorieCount : string) : void {
    var calories = parseInt(calorieCount);
    this.calorieFilter = calories;
  }
}
