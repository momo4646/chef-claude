
export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsList = ingredients.map(ingredient => <li>{ingredient}</li>)
    
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        ingredients.push(newIngredient)
        console.log(ingredientsList)
    }
    return(
        <main>
            <form className='add-ingredient-form' onSubmit={handleSubmit}>
                <input 
                    name='ingredient'
                    aria-label='Add ingredient' 
                    placeholder='eg. oregano'/>
                <button >Add Ingredient</button>        
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}