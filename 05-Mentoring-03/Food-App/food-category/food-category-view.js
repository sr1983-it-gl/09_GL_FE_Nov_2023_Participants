

class FoodCategoryView {

  constructor(foodCategoryModel){
    
    this.foodCategoryModel = foodCategoryModel;
  }

  draw(){

    const listCardElement = document.createElement("div");
    listCardElement.setAttribute("class", "list-card");

      const imageElement = document.createElement("img");
      imageElement.src = this.foodCategoryModel.imagePath

      const anchorElement = document.createElement("a");
      anchorElement.setAttribute("class", "list-name");
      anchorElement.setAttribute("href", `#${this.foodCategoryModel.id}`)
      anchorElement.innerText = this.foodCategoryModel.displayName

    listCardElement.appendChild(imageElement)
    listCardElement.appendChild(anchorElement)

    return listCardElement;
  }

  attachToParent(foodCategoryHtmlFragment){

    const parentElement = document.getElementById("category-list");

    console.log(`Parent Element is ${parentElement}`)
    console.log(`Food Category HTML Fragment is ${foodCategoryHtmlFragment}`)

    parentElement.appendChild(foodCategoryHtmlFragment);
  }

}

export {FoodCategoryView}