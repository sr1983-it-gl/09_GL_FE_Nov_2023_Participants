
class FoodItemModel {


  constructor(id, name, price, rating, imagePath){

    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;    

    this.imagePath = `food-item/model/${imagePath}`;

    // images/south indian/sambhar-vada.jpg
    // food-item/model/images/south indian/sambhar-vada.jpg

    // console.log(`Image path is -> ${this.imagePath}`)

  }
}

export {FoodItemModel}