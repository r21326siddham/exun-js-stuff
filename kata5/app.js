// 5.
// (Optional Task for Bonus Points) Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good at math. Can you help him to find out how many cakes he could bake considering his recipes? Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(originalRecipe, peteIngredients) {
  let ratioChecker = [];
  const originalRecipeIngredients = Object.keys(originalRecipe);
  for (let recipeIngredient of originalRecipeIngredients) {
    if (typeof peteIngredients[recipeIngredient] == "undefined") {
      return 0;
    }
    ratioChecker.push(
      peteIngredients[recipeIngredient] / originalRecipe[recipeIngredient]
    );
  }

  sortedRatioChecker=ratioChecker.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return Math.floor(sortedRatioChecker[0]);
}
