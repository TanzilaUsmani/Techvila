import React from "react";

function Contact(){
    return(
        <div className="contact">
            <main>
                <h1>Contact Us</h1>
                <form>
                <div>
                    <lable>Name</lable>
                    <input type="text" required placeholder="Abc"/>
                    </div>
                    <div>
                    <lable>Email</lable>
                    <input type="text" required placeholder="Abc@gmail.com"/>
                    </div>
                    <div>
                    <lable>Message</lable>
                    <input type="text" required placeholder="Tell us about your query....."/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact;