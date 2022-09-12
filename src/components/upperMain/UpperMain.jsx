import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./upperMain.scss"
import pointImg from "../../imgs/upperMain/point.png"

export default function UpperMain () {
    let [searchValue, setSearchValue] = useState("")
    let [isMembersNumChanged, changeMembersStatus] = useState(false)
    let [membersNum, setMembersNum] = useState("Wait...")

    function writeSearchValue (e) {
        console.log(searchValue)
        setSearchValue(e.target.value)
    }
    useEffect(() => {
        axios.get("https://www.random.org/integers/?num=1&min=1&max=99999&col=1&base=10&format=plain&rnd=new")
        .then((response) => {
            console.log(changeMembersStatus)
            setMembersNum(response.data)
        })
    },[isMembersNumChanged]) 

    return (
        <section id="upperMain">
            <div id="leftUpperMain">
                <div id="upperLeftDrawing"></div>
                <p>
                    The scale of the challenges facing our planet can seem daunting, but we can all do something.
                </p>
                <div id="inputShell">
                    <img src={pointImg} alt="point" />
                    <input onChange={writeSearchValue} placeholder="Find the place to help" type="text" />
                    <button>SEARCH</button>
                </div>
            </div>
            <div id="rightUpperMain">
                <div id="parrotImg">
                    <div 
                     id="membersCount"
                     onMouseMove={(e) => {
                        e.target.style.top = ` ${295 + (e.clientY / 25)}px`
                        e.target.style.left = ` ${7 + (e.clientX / 25)}px`
                    }}
                    >
                        <span>{membersNum}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
