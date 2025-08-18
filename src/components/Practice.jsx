import React from 'react'

export default function App() {

    function handleSubmit(formData) {
        const email = formData.get('email')
    }
    return(
        <section>
            <h1>Signup Form</h1>
            <form action={handleSubmit}>
                <label htmlFor='first-name'>First Name: </label>
                <br />
                <input type='text' id='first-name' name='first-name'/>
                <br/>
                <label htmlFor='last-name'>Last Name: </label>
                <br/>
                <input type='text' id='last-name' name='last-name'/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )

}