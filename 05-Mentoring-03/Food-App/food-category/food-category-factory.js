import { FoodCategoryModel } from "./model/food-category-model.js";

import {FoodItemUtils} from "../food-item/model/food-item-utils.js"


class FoodCategoryFactory {

  static getCategoryBiryani(){

    const foodCategoryBiryani = new FoodCategoryModel(
      "biryani", "Biryani", 
        FoodItemUtils.retriveSampleFoodItem(5).imagePath
    )
    return foodCategoryBiryani;
  }

  static getCategoryChicken(){

    const foodCategoryChicken = new FoodCategoryModel(
      "chicken", "Chicken Delicious", 
      FoodItemUtils.retriveSampleFoodItem(14).imagePath
    )
    return foodCategoryChicken;
  }

  static getCategoryPaneer(){

    const foodCategoryPaneer = new FoodCategoryModel(
      "paneer", "Paneer Mania",
      FoodItemUtils.retriveSampleFoodItem(20).imagePath
    )
    return foodCategoryPaneer;
  }

  static getCategoryVegetable(){

    const foodCategoryVegetable = new FoodCategoryModel(
      "vegetable", "Pure Veg Dishes",
      FoodItemUtils.retriveSampleFoodItem(23).imagePath
    )
    return foodCategoryVegetable;
  }

  static getCategoryChinese(){

    const foodCategoryChinese = new FoodCategoryModel(
      "chinese", "Chinese Corner",
      FoodItemUtils.retriveSampleFoodItem(35).imagePath
    )
    return foodCategoryChinese;
  }

  static getCategorySouthIndian(){

    const foodCategorySouthIndian = new FoodCategoryModel(
      "south indian", "South Indian",
      FoodItemUtils.retriveSampleFoodItem(40).imagePath
    )
    return foodCategorySouthIndian;
  }

  static getAllFoodCategories(){

    const foodCategories = new Array();

    foodCategories.push(this.getCategoryBiryani());;
    foodCategories.push(this.getCategoryChicken());;
    foodCategories.push(this.getCategoryPaneer());;

    foodCategories.push(this.getCategoryVegetable());;
    foodCategories.push(this.getCategoryChinese());;
    foodCategories.push(this.getCategorySouthIndian());;


    return foodCategories;
  }

}

export {FoodCategoryFactory}

// biryani
// chicken
// paneer
// vegetable
// chinese
// south indian