import "./FormStyle.css"

import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input className="text"></input>
                <label>Email</label>
                <input className="email"></input>
                <label>Subject</label>
                <input className="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type Your Message Here"/>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form