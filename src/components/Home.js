import React from 'react'
import '../styles/Home.css'
import profile from '../photo.png'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

function Home() {
    return (
        <section className="home_container fade_container">
            <div className="center_container home_content">
                <div className="home_box">
                    <h1 className="home_title">Quentin Vandevorst</h1>
                    <p className="home_text">Junior développeur Front End</p>
                    <p className="home_aboutMe">25 ans, passionné par le monde de l'informatique, de la programmation et des nouvelles technologies. Je suis a la recherche d'un employeur qui me permettra d'évoluer et m'épanouir dans ce monde si vaste.</p>
                    <p className="home_quality">Logique, curieux, passionné, autodidacte, autonome, persévérant.</p>
                    <Link className="home_link" to="/contact">Contactez-moi</Link>
                </div>
                <div className="home_image_container">
                    <img className="home_image" src={profile} alt="quentin_profile"></img>
                </div>
            </div>
            <svg className="home_footer_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f05053" fill-opacity="1" d="M0,160L120,186.7C240,213,480,267,720,266.7C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </section>
    )
}

export default Home