import "./FormStyle.css"

import React from 'react'

const Form = () => {
    return (
        <div className="form" >
            <form action="https://formsubmit.co/anupkolhe233@gmail.com" method="post">
                <label>Your Name</label>
                <input className="text" type="text" name="name"></input>
                <label>Email</label>
                <input className="email" type="email" name="email"></input>
                <label>Subject</label>
                <input className="text" type="text" name="subject"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type Your Message Here" name="textmesssage"/>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form;