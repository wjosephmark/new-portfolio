import React from "react"

export default function Contact(){

    return(
        <div className="app">
            <form className="contact-form" action="mailto:wjosephmark@gmail.com">
                <input type="text" name="Name" placeholder="Name" />
                <input type="text" name="Email" placeholder="Email" />
                <input type="text" name="Message" placeholder="Message" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}