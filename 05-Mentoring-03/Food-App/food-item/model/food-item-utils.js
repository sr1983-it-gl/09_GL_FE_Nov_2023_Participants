
import { FoodItemModel } from "./food-item-model.js"
import {SAMPLE_FOOD_ITEMS} from "./sample-food-items.js"

class FoodItemUtils {

  static retriveSampleFoodItem(foodItemId){

    const resultSampleFoodItem = SAMPLE_FOOD_ITEMS.find( (sampleFoodItem) => {
      return sampleFoodItem.id == foodItemId
    })


    return FoodItemUtils.convert(resultSampleFoodItem);
  }

  static convert(sampleFoodItem){

    const foodItemModel = new FoodItemModel(
      sampleFoodItem.id,
      sampleFoodItem.name,
      sampleFoodItem.price,
      sampleFoodItem.rating,
      sampleFoodItem.img
    );

    return foodItemModel;

    // id, name, price, rating, imagePath
  }

  static getAllFoodItems(foodCateogoryModel){

    const foodItemModelObjects = new Array();

    SAMPLE_FOOD_ITEMS.forEach( (sampleFoodItem) => {

      if (sampleFoodItem.category == foodCateogoryModel.id){

        const foodItemModel = FoodItemUtils.convert(sampleFoodItem);

        foodItemModelObjects.push(foodItemModel)
      }

    });

    return foodItemModelObjects;
  }

}

export {FoodItemUtils}