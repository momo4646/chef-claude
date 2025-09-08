import react from 'react'

export default function Practice(props) {
    const [messages, setMessages] = react.useState([])

    function displayMessage() {
        let display
        switch (messages.length) {
            case 0:
                display = "You're all caught up!"
                break; 
            case 1:
                display = "You have 1 unread message."
                break;
            default:
                display = `You have ${messages.length} unread messages.`
                break;
        }
        return display;
}

    return (
        <div>
            <h1>{displayMessage()}</h1>
        </div>
    )
}