const mealInput = document.getElementById("mealInput");
const mealList = document.getElementById("mealList");
const ingredientsButton = document.getElementById("ingredientsButton");
const prioritiesButton = document.getElementById("priorityInfoButton");
const addIngredientButton = document.getElementById("addIngredientButton"); // null
const ingredientList = document.getElementById("ingredientList");// null
const showTagsButton = document.getElementById("showTags");

const selectedpriorities = [];


addMealButton.addEventListener("click", () => {

    const mealName = mealInput.value.trim();

    if (mealName === "") {
        return;
    }

    const mealItem = document.createElement("li");
    mealItem.textContent = mealName;

    mealList.appendChild(mealItem);

    mealInput.value = "";
});

//prioritiesButton.addEventListener("click", () => {
   // const priorityDropDown = document.getElementById("priorityDropDown");
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(box => {
        selectedpriorities.push(box.value);
    });
//})


addIngredientButton.addEventListener("click", () => {
    const ingredientName = prompt("Enter the name of the ingredient:");// not working
    if (ingredientName) {
        const newIngredient = document.createElement("li");
        newIngredient.textContent = ingredientName;
        ingredientList.appendChild(newIngredient);
    }
});

showTagsButton.addEventListener("click", () => {
    alert(`Selected tags: ${selectedpriorities.join(", ")}`);
});