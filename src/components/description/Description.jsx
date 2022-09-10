import React, {useState} from "react";
import "./description.scss"

function Accordion (props) {
    const [isOpen, setOpen] = useState(false)
    return(
        <div className={isOpen ? "openedAccordion" : "accordion"}>
                    <div className="accordionHead">
                        <h2>{props.head}</h2>
                        <div 
                            onClick={() => {isOpen ? setOpen(false) : setOpen(true)}}
                            className="openAccordBut">{isOpen ? "-" : "+"}</div>
                    </div>
                    <p className="accordionDesc">
                        Not to make an open fire in nature and to clean up litter;
                        not to pollute open water bodies; to switch to alternative energy sources;
                        to reduce the use of non-renewable resources
                    </p>
        </div>
    )
}

export default function Description () {
    return (
        <section id="descriptionSection">
            <div id="leftDescription">
                <h1 id="descriptionHead">Ready to Get started?</h1>
                <p>
                    When pattern is mentioned in interior design, it is easy to asso-
                    ciate it with a geometric
                    patterned wallpaper or colourful prints on interior fabrics.
                </p>
                <button>Contact us</button>
            </div>
            <div id="rightDescription">
                <Accordion head="What can I do to protect our planet?"/>
                <Accordion head="How to save nature ecology?"/>
                <Accordion head="What is nature conservation?"/>
            </div>
        </section>
    )
}