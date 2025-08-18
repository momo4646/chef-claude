import React from 'react'

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prev => [...prev, newIngredient])
    };

    return(
        <main>
            <form className='add-ingredient-form' onSubmit={handleSubmit}>
                <input 
                    name='ingredient'
                    aria-label='Add ingredient' 
                    placeholder='eg. oregano'
                    type='text' />
                <button type='submit'>Add Ingredient</button>        
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    );
};