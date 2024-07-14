
import {FoodCategoryFactory} from "../food-category/food-category-factory.js"

import {FoodAppView} from "./food-app-view.js"

class FoodAppController {

  init(){

    const foodCategories = FoodCategoryFactory.getAllFoodCategories();

    const foodAppView = new FoodAppView(foodCategories);

    foodAppView.drawMainPanelView();
    foodAppView.drawShortcutPanelView();

  }
}

export {FoodAppController}