import {Course} from './food-type'
export interface FoodData {
  name: string;
  kcal: number;
  carbohydrate: number;
  protein: number;
  fat: number;
  price: number;
  type: Course;
  date: Date;
}
