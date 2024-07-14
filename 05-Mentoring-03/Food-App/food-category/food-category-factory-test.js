import { FoodCategoryFactory } from "./food-category-factory.js";


function testGetAllCategories() {

  const allCategories = 
  FoodCategoryFactory.getAllFoodCategories();

  console.log(allCategories);

}

testGetAllCategories();