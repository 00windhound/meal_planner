const mealInput = document.getElementById("mealInput");
const mealList = document.getElementById("mealList");
const ingredientsButton = document.getElementById("ingredientsButton");
const prioritiesButton = document.getElementById("priorityInfoButton");
const addIngredientButton = document.getElementById("addIngredientButton"); // null
const ingredientList = document.getElementById("ingredientList");// null
const showTagsButton = document.getElementById("showTags");

const selectedpriorities = [];


function start() {
    console.log("script page started.");
}

start();    


// price, per serving numbers, servings per package, brand
class ingredient {
    constructor(name){
        this.name = name;
    }
}

// recipies 
class recipe {
    constructor(name, ingredients) {
        this.name = name;
    }
}







//prioritiesButton.addEventListener("click", () => {
   // const priorityDropDown = document.getElementById("priorityDropDown");
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(box => {
        selectedpriorities.push(box.value);
    });
//})






