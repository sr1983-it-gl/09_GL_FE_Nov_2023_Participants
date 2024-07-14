

class FoodItemView {

  constructor(foodItemModel){

    this.foodItemModel = foodItemModel;
  }

  draw(){

    const itemCardElement = document.createElement("div");
    itemCardElement.setAttribute("id", "item-card")

      const cardTopElement = document.createElement("div");
      cardTopElement.setAttribute("id", "card-top")

        const ratingElement = document.createElement("i")
        ratingElement.setAttribute("class", "fa fa-star");
        ratingElement.setAttribute("id", "id");
        ratingElement.innerText = this.foodItemModel.rating

        const addToCartElement = document.createElement("i")
        addToCartElement.setAttribute("class", "fa fa-heart-o add-to-cart");
        addToCartElement.setAttribute("id", this.foodItemModel.id);
    
      cardTopElement.appendChild(ratingElement);
      cardTopElement.append(addToCartElement);

    // console.log("Food Item model " + JSON.stringify(this.foodItemModel));

    // Img
    const imageElement = document.createElement("img");
    imageElement.src = this.foodItemModel.imagePath

    // Name
    const nameElement = document.createElement("p")
    nameElement.setAttribute("id", "item-name");
    nameElement.innerText = this.foodItemModel.name;

    // Price
    const priceElement = document.createElement("p")
    priceElement.setAttribute("id", "item-price");
    priceElement.innerText = `Price : $ ${this.foodItemModel.price}`

    itemCardElement.appendChild(cardTopElement);
    itemCardElement.appendChild(imageElement);
    itemCardElement.appendChild(nameElement);
    itemCardElement.appendChild(priceElement);

    return itemCardElement;
  }

  attachToParent(foodItemHtmlElement, foodCategoryModel){

    const foodCategoryId = foodCategoryModel.id;

    const foodCategoryHtmlElement 
      = document.getElementById(foodCategoryId);

    foodCategoryHtmlElement.appendChild(foodItemHtmlElement)
  }

}

export {FoodItemView}