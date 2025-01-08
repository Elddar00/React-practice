export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");
    const formData = new FormData(e.currentTarget);
    const newIngredients = formData.get("ingredient");
    ingredients.push(newIngredients);
    console.log(ingredients);
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
