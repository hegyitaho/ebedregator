import {Course} from './course'
import {Site} from './sites'
export interface FoodData {
  name: string;
  kcal: number;
  carbohydrate: number;
  protein: number;
  fat: number;
  price: number;
  type: Course;
  date: Date;
  site: Site;
}
