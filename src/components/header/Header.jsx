import React, {useState} from "react";
import "./header.scss"

export default function Header () {
    let [activeNav, setActiveNav] = useState([
        "activeNav","","",""
    ])
    function switchPages(e) {
        let index = e.target.dataset.num;
        let resultArr = activeNav.map(() => {
            return ""
        })
        resultArr[index] = "activeNav"
        setActiveNav(resultArr)
    }
    return (
        <header>
                <div id="headLogo"></div>
                <nav>
                    <span onClick={switchPages} data-num="0" className={activeNav[0]}>
                        Home
                    </span>
                    <span onClick={switchPages} data-num="1" className={activeNav[1]}>
                        Our mission
                    </span>
                    <span onClick={switchPages} data-num="2" className={activeNav[2]}>
                        Places
                    </span>
                    <span onClick={switchPages} data-num="3" className={activeNav[3]}>
                        Team
                    </span>
                </nav>
                <button id="applyBut">Apply</button>
        </header>
    )
}