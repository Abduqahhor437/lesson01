import React from "react";
import "./Header.scss"
import {LINKS} from "../../static/index"

const Header = () => {
    return (
        <header className="header">
            <span style={{color: "red", textAlign: "center"}}>Header</span>
            <ul className="header__collection">
                {
                    LINKS.map((item, inx) => {
                        return  <li className="header__item" key={inx}>
                            <a className="header__link" href={item.link}><span>{item.title}</span></a>
                        </li>
                    })
                }
            </ul>
        </header>
    )
}
export default Header