import React from 'react'

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    
    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prev => [...prev, newIngredient])
    };

    const [recipeShown, setRecipeShown] = React.useState(false)

    function showRecipe() {
        setRecipeShown(prev => true)
        return
    }

    return(
        <main>
            <form className='add-ingredient-form' action={handleSubmit}>
                <input 
                    name='ingredient'
                    aria-label='Add ingredient' 
                    placeholder='eg. oregano'
                    type='text' 
                    required
                    />
                <button type='submit'>Add Ingredient</button>        
            </form>
            {(ingredientsList.length > 0) ?
            <section>
                <h2>Ingredients on hand: </h2>
                <ul>{ingredientsList}</ul>
            </section> : null
            }
            {(ingredientsList.length > 3) ?
                <div className='get-a-recipe-container'>
                    <div>
                        <h3>Ready for a recipe? </h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={showRecipe}>Get a recipe</button>
                </div> 
                : null
            }
            {(recipeShown) ? 
                <>
                <h2>Spaghetti Marinara</h2>
                <h3>Ingredients</h3>
                <ul>
                    <li>500g spaghetti pasta</li>
                    <li>400g tomato sauce</li>
                    <li>10g fresh oregano, chopped</li>
                    <li>5g salt</li>
                </ul>
                <h3>Instructions</h3>
                <ol>
                    <li>Bring a large pot of salted water to a boil.</li> 
                    <li>Add the spaghetti and cook according to package instructions until al dente.</li>
                    <li>In a separate saucepan, heat the tomato sauce over medium heat.</li> 
                    <li>Add the chopped oregano and salt.</li> 
                    <li>Simmer for 5-10 minutes, stirring occasionally.</li>
                    <li>Drain the cooked spaghetti and return to the pot.</li> 
                    <li>Pour the tomato sauce over the pasta and toss to combine.
                    Serve hot.</li>
                </ol>
                <h3>Nutrition (per serving)</h3>
                <ul>
                    <li>Protein: 10g</li>
                    <li>Carbs: 75g</li>
                    <li>Fat: 2g</li>
                </ul> 
                </>
                : null
            }
        </main>
    );
};