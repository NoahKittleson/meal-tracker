import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCarlorieCount = args[0];
    //if(desiredCarlorieCount === "done") {
    return input.filter((meal) => {
      return meal.calories >= desiredCarlorieCount;
    });
    //}
    // else if (desiredDoneState === "notDone") {
    //   return input.filter((task) => {
    //     return !task.done;
    //   });
    // } else {
    //   return input;
    // }
  }
}