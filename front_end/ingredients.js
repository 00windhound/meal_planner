const addIngredientButton = document.getElementById("addIngredientButton");
const ingredientNameInput = document.getElementById("ingredientName");
const priceInput = document.getElementById("price");
const caloriesInput = document.getElementById("calories");
const saveIngredientButton = document.getElementById("saveIngredientButton");
const ingredientForm = document.getElementById("ingredientForm");
const ingredientList = document.getElementById("ingredientList");


function start() {
    console.log("Ingredient script initialized.");
}

start();


class Ingredient {
    constructor(name, brand, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}


addIngredientButton.addEventListener("click", () => {
    console.log("Add Ingredient button clicked");
    ingredientForm.style.display = "block";
});

saveIngredientButton.addEventListener("click", () => {
    var newIngredient = new Ingredient(
        newIngredient.name = ingredientNameInput.value,
        newIngredient.price = priceInput.value,
        newIngredient.calories = caloriesInput.value
    )

    localStorage.setItem("ingredient", JSON.stringify(newIngredient));
    alert("Ingredient saved!");
});// get a list of saved ingredients if not blank, and add new ingredient to list before saving