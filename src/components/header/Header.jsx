import React, {useState} from "react";
import "./header.scss"
import openHeader from "../../imgs/header/openMenu.png"
import cross from "../../imgs/header/icon-close.png"

export default function Header () {
    const [activeNav, setActiveNav] = useState([
        "activeNav","","",""
    ])
    const [isOpen, setOpen] = useState(false)

    function switchPages(e) {
        let index = e.target.dataset.num;
        let resultArr = activeNav.map(() => {
            return ""
        })
        resultArr[index] = "activeNav"
        setActiveNav(resultArr)
    }

    function toggleHeader() {
        isOpen ? setOpen(false) : setOpen(true)
    }
    return (
        <>
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
            <header id="mobileHeader" className={isOpen ? "openedHeader" : "closedHeader"}>
                <div id="headMobileHeader" >
                    <div id="headLogo"></div>
                    <img id="toogleHeader" src={isOpen ? cross : openHeader} onClick={toggleHeader} alt="" />
                </div>
                <div id="mobileHeadBody">
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
                    </div>
            </header>
        </>
    )
}