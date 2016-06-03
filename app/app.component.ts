import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect) = "mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("PBJ Sandwich", "Extra chunky peanut butter", 450, 0),
      new Meal("Cheese Burger", "Extra cheese", 800, 1),
      new Meal("Human Meat", "", 300, 2),
      new Meal("Jelly Donut", "Vegan", 320, 3),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
