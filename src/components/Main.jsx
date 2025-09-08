import React from 'react'

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    
    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prev => [...prev, newIngredient])
    };

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
                    <button>Get a recipe</button>
                </div> : null
            }
        </main>
    );
};