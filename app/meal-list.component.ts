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
    <input placeholder="calorie count" class="col-sm-3 input-lg" #calorieCount>
    <label> Higher?
      <input type="checkbox" #higher>
    </label>
    <button (click)="submitFilter(calorieCount, higher)">filter</button>
    <br>
    <meal-display *ngFor="#meal of mealList | calories:calorieFilter:higherFilter"
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
  public higherFilter: boolean = true;
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
  submitFilter(calorieCount : HTMLInputElement, higherCheckbox: HTMLInputElement) : void {
    var calories = parseInt(calorieCount.value);
    var higher = higherCheckbox.checked;
    this.higherFilter = higher;
    this.calorieFilter = calories;
  }
}
