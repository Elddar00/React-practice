import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
  ]);

  const [recipe, setRecipe] = React.useState("");

  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      // recipeSection.current.scrollIntoView({ behavoior: "smooth" });
      const yCoord = recipeSection.current.getBoundingClientRect().top;

      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [recipe]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
