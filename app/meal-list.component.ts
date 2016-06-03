import { EventEmitter, Component } from 'angular2/core';
import { MealDisplayComponent } from './meal-display.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model';

@Component ({
  selector: "meal-list",
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent, NewMealComponent, EditMealComponent],
  template: `
    <meal-display *ngFor="#meal of mealList"
    (click)="mealClicked(meal)"
    [class.selected]="meal === selectedMeal"
    [meal]="meal">
    </meal-display>
    <new-meal (onSubmitNewMeal)="addMeal($event)">
    </new-meal>
    <edit-meal
    [meal] = "selectedMeal">
    </edit-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
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
}
