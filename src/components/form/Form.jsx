import React, {useState} from "react";
import "./form.scss"

export default function Form () {
    let [nameInpValue, setNameInpValue] = useState("")
    let [emailInpValue, setEmailInpValue] = useState("")
    function collectInpValues(e) {
        console.log(nameInpValue, emailInpValue)
        e.target.id === "nameInput" ?
        setNameInpValue(e.target.value) : setEmailInpValue(e.target.value)
    }
    return (
        <section id="formSection">
            <div id="leftFormSection">
                <h1>Get started today!</h1>
                <div id="formDescription">
                    Learn more about how you can save our planet's nature.
                    From smart consumption to switching to renewable energy,
                    each of us can do our part to save the planet.
                </div>
            </div>
            <div id="rightFormSection">
                <h2>Log In</h2>
                <form id="logInForm" action="">
                    <input 
                        className="logInInput"
                        id="nameInput"
                        name="name" 
                        placeholder="Name" 
                        type="text" 
                        onChange={collectInpValues}/>
                    <input 
                        className="logInInput" 
                        id="emailInput"
                        name="email" 
                        placeholder="Email" 
                        type="email" 
                        onChange={collectInpValues}/>
                    <button id="logInFormButton">BOOK A DEMO</button>
                </form>
            </div>
        </section>
    )
}