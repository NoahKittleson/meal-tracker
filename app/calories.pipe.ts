import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCarlorieCount = args[0];
    var moreThan = args[1];
    if(desiredCarlorieCount <= 0) {
      return input;
    }
    if (moreThan) {
      return input.filter((meal) => {
        return meal.calories >= desiredCarlorieCount;
      });
    } else {
      return input.filter((meal) => {
        return meal.calories <= desiredCarlorieCount;
      });
    }

  }
}
