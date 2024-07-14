
import {FoodItemUtils} from "../food-item/model/food-item-utils.js"

import {FoodItemView} from "../food-item/food-item-view.js"
import {FoodCategoryView} from "../food-category/food-category-view.js"

class FoodAppView {

  constructor(foodCategories){

    this.foodCategories = foodCategories;

  }

  drawMainPanelView(){

    this.foodCategories.forEach( (foodCategory) => {

      const foodItems = FoodItemUtils.getAllFoodItems(foodCategory)

      foodItems.forEach( (foodItem) => {

        const foodItemView = new FoodItemView(foodItem);
        const foodItemHtmlElement = foodItemView.draw();

        foodItemView.attachToParent(foodItemHtmlElement, foodCategory)

      })

    })
  }

  drawShortcutPanelView(){

    this.foodCategories.forEach( (foodCategory) => {

      const foodCategoryView = new FoodCategoryView(foodCategory);

      const foodCategoryHtmlFragment = foodCategoryView.draw();
      foodCategoryView.attachToParent(foodCategoryHtmlFragment);
    }) 

  }
}

export {FoodAppView}