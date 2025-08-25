
import react from 'react';

export default function App() {

    function handleSubmit(formData) {
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        const opinion = formData.getAll('opinion')
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Opinion: ${opinion}`)
    }

    return(
       <form action={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <br/>
            <input id='name' name='name' defaultValue='John Williams' type='text' />
            <br/>
            <label htmlFor='email'>Email: </label>
            <br/>
            <input id='email' name='email' defaultValue='john@net.com' type='email' />
            <br/>
            <label htmlFor='password'>Password: </label>
            <br/>
            <input id='password' defaultValue='@123' name='password' type='password' />
            <br/>
            <label htmlFor='notes'>Notes: </label>
            <br/>
            <textarea id='notes' name='notes' defaultValue='this is some notes.'></textarea>
            <br/>
            <label htmlFor='opinion'></label>
            <fieldset>
                <legend>Do you like this form?</legend>
                <label><input id='used' name='opinion' type='checkbox' value='used all the time' defaultChecked={true} />Used all the time</label>
                <label><input id='like-smell' name='opinion' type='checkbox' value='like the smell' />Like the smell</label>
            </fieldset>
            <br/>
            <input type='submit' value='submit' />
       </form>
    )
}