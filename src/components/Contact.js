import React, { createRef, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import '../styles/Contact.css'
import photo from "../photo.png"

function Contact() {

    const email = createRef()
    const subject = createRef()
    const body = createRef()

    const [sucess, setSucess] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(() => {

    }, [])

    const sendEmail = function (e) {

        e.preventDefault();

        setLoader(true)

        console.log(body.current.value)

        window.Email.send({
            Host: "ssl0.ovh.net",
            Username: "info@quentinv-cv.site",
            Password: "quentinv081195",
            To: 'quentinv95@outlook.com',
            From: email.current.value,
            Subject: subject.current.value,
            Body: body.current.value
        })
            .then((res) => {
                if (res === "OK") {
                    setSucess(true)
                    setLoader(false)
                    setTimeout(() => {
                        setSucess(false)
                    }, 4000);
                }
            })
    }

    return (
        <section className="contact_container fade_container">
            <div className="center_container contact_content">
                <section className="contact_details">
                    <h2 className="contact_details_title">Mes informations</h2>
                    <ul className="contact_details_list">
                        <li>Quentin Vandevorst</li>
                        <li>25 ans</li>
                        <li><a href="mailto:info@quentinv-cv.site">info@quentinv-cv.site</a></li>
                        <li>0494-89.23.65</li>
                        <li>Permis B</li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/quentinvandevorst/"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                    {sucess ? <p className="contact_notifs">Votre message à été envoyé !</p> : ''}
                </section>
                <form onSubmit={(e) => sendEmail(e)} className="contact_form">
                    <h2 className="contact_form_title">Me contacter</h2>
                    <input ref={email} required placeholder="Saisissez votre adresse e-mail..." className="contact_form_email"></input>
                    <input ref={subject} required placeholder="Saisissez l'objet du message..." className="contact_form_subject"></input>
                    <textarea ref={body} required placeholder="Saisissez votre message..." className="contact_form_body"></textarea>
                    <button className="contact_form_submit">Envoyer</button>
                    {loader ? <div className="contact_form_loader">
                        <i className="fas fa-paper-plane"></i>
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div> : ''}
                </form>
            </div>
            <svg className="home_footer_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f05053" fill-opacity="1" d="M0,160L120,186.7C240,213,480,267,720,266.7C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </section>

    )
}

export default Contact