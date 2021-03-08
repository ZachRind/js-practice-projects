const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  
      get appetizers(){
        return this._courses.appetizers;
      },
      set appetizers(appetizers){
        this._courses.appetizers = appetizers;
      },
  
      get mains(){
        return this._courses.mains;
      },
      set mains(mains){
        this._courses.mains = mains;
      },
  
      get desserts(){
        return this._courses.desserts;
      },
      set desserts(desserts){
        this._courses.desserts = desserts;
      },
  
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice  
    };
    return this._courses[courseName].push(dish);
   },
  
   getRandomDishFromCourse(courseName){
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
   },
  
   generateRandomMeal(){
     let appetizer = menu.getRandomDishFromCourse('appetizers');
     let main = menu.getRandomDishFromCourse('mains');
     let dessert = menu.getRandomDishFromCourse('desserts');
     let totalPrice = appetizer.price + main.price + dessert.price
     return `The meal will consist of ${appetizer.name}, ${main.name}, and ${dessert.name} for the price of ${totalPrice} dollars.`;
   }
  };
  
  menu.addDishToCourse('appetizers', 'zucchini', 6);
  menu.addDishToCourse('appetizers', 'fries', 5);
  menu.addDishToCourse('appetizers', 'calamari', 4);
  
  menu.addDishToCourse('mains', 'cheese burger', 10);
  menu.addDishToCourse('mains', 'steak', 11);
  menu.addDishToCourse('mains', 'salad', 8);
  
  menu.addDishToCourse('desserts', 'chocolate cake', 6);
  menu.addDishToCourse('desserts', 'cheesecake', 7);
  menu.addDishToCourse('desserts', 'apple pie', 7);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  