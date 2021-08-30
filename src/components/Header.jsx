import React from 'react';

export default function Header({ setPage_number, year }) {
    return (
        <div className="left-box">
        <div className="name-photo">
            <img src="assets/photo.jpg" alt="avatar" className="myphoto"></img>
            <h1 className="myname">Sebastian Wilczyński</h1>
            <h2 className="mydesc">Web Designer</h2>

            <div className="social-media">
                <a href="https://www.facebook.com/wolfortcs"><i className="fab fa-facebook-f main"></i></a>
                <a href="https://twitter.com/wolfortcs"><i className="fab fa-twitter main"></i></a>
                <a href="https://www.linkedin.com/in/sebastian-wilczy%C5%84ski-65b644155/"><i className="fab fa-linkedin-in main"></i></a>
                <a href="https://www.instagram.com/wolfortcs_/"><i className="fab fa-instagram main-insta"></i></a>
            </div>

        </div>

        <nav>
            <h2 className="menu-name">Menu</h2>
            <ul className="main-li">
                <li id="main-page" ><a href="#" onClick={function(){setPage_number("1")}}>Strona główna</a></li>
                <li id="about-me" ><a href="#" onClick={function(){setPage_number("2")}}>O mnie</a></li>
                <li id="portfolio" ><a href="#" onClick={function(){setPage_number("3")}}>Portfolio</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>

        <div className="footer">
            <h2>© {year} All rights reserved.</h2>
        </div>

    </div>
    )
}
