const mealInput = document.getElementById("mealInput");
const addMealButton = document.getElementById("addMealButton");
const mealList = document.getElementById("mealList");

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