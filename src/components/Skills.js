import React from 'react'
import '../styles/Skills.css'
import SkillsItem from './SkillsItem'

function Skills() {
    return (
        <section className="skills_container fade_container">
            <div className="center_container">
                <ul className="skills_list">
                    <SkillsItem business='Formation Front End' place="Cepegra - Charleroi" date="05/2020 - 10/2020">
                        <li className="skills_details_item">JavaScript</li>
                        <li className="skills_details_item">React JS</li>
                        <li className="skills_details_item">Vue JS</li>
                        <li className="skills_details_item">Firebase</li>
                        <li className="skills_details_item">PWA</li>
                    </SkillsItem>
                    <SkillsItem business='Citizens of Wallonia' place="Hackaton - Liège" date="06/03/2020 - 08/03/2020">
                        <li className="skills_details_item">Cette année la thématique du hackathon était : (ré)inventer la ville de demain en créant des services innovants pour le citoyen!</li>
                        <li className="skills_details_item">Notre équipe a développé une application, Potagio, qui permet au particulier et/ou à l'agriculteur de partager ou échanger leur surplus de production. Il est également possible d'en faire don à une oeuvre caritative.</li>
                        <li className="skills_details_item">Après trois jours de travail intensif... Notre équipe a gagner le prix gamification de l'hackaton 2020</li>
                    </SkillsItem>
                    <SkillsItem business='Formation UX / UI Designer' place="Cepegra - Ciney" date="09/2019 - 02/2020">
                        <li className="skills_details_item">Html 5, Css 3 et JavaScript</li>
                        <li className="skills_details_item">Analyse utilisateurs</li>
                        <li className="skills_details_item">Comprendre la demande du client</li>
                        <li className="skills_details_item">Prototypage avec Figma et Adobe XD</li>
                        <li className="skills_details_item">Organisation de tests utilisateurs</li>
                        <li className="skills_details_item">PlayZone 2019 : Domaine de Chevetogne</li>
                    </SkillsItem>
                    <SkillsItem business='Formation IOT' place="Technobel - Ciney" date="09/2018 - 12/2018">
                        <li className="skills_details_item">Programmation Python</li>
                        <li className="skills_details_item">Utilisation de la méthode SCRUM / Agile</li>
                        <li className="skills_details_item">PlayZone 2018 : Smart Farming</li>
                        <li className="skills_details_item"><a className="skills_details_item_link" href="https://badgr.com/public/assertions/IjdzG5hURgqq_JwmrN1HGA" target="_blank">Badge : Algorithmes</a></li>
                        <li className="skills_details_item"><a className="skills_details_item_link" href="https://badgr.com/public/assertions/65FYzohuSlWLgcDhJDQhfw" target="_blank">Badge : Technologies des réseaux IoT</a></li>
                        <li className="skills_details_item"><a className="skills_details_item_link" href="https://badgr.com/public/assertions/5WMYVe4RRISiPEbNViXpiw" target="_blank">Badge : Technologies de développement IoT</a></li>
                        <li className="skills_details_item"><a className="skills_details_item_link" href="https://badgr.com/public/assertions/Jmk1ea-EQ6KfQWG_EqxJrg" target="_blank">Badge : Atelier IoT</a></li>
                        <li className="skills_details_item"><a className="skills_details_item_link" href="https://badgr.com/public/assertions/Olg8Wgr1ShKjQOY25MyAtw" target="_blank">Badge : Play-Zone - #smartfarming - 2018</a></li>
                        <li className="skills_details_item"><a className="skills_details_item_link" href="https://badgr.com/public/assertions/4LML2Wc6TAWeIT-5I_3bXw" target="_blank">Badge : Expert IoT</a></li>
                    </SkillsItem>
                    <SkillsItem business='Intérim maintenance informatique' place="Quevrain - Erpent" date="08/2017 - 08/2017">
                        <li className="skills_details_item">Maintenance des postes informatiques</li>
                        <li className="skills_details_item">Réapprovisionnement du stock</li>
                        <li className="skills_details_item">Réception et contrôle des colis</li>
                    </SkillsItem>
                    <SkillsItem business='Stage IFAPME' place="Civadis - Rhisnes" date="09/2016 - 07/2017">
                        <li className="skills_details_item">Déploiement Windows 10 sur machine client</li>
                        <li className="skills_details_item">Base configuration Windows Server et NAS</li>
                        <li className="skills_details_item">Réparation hardware PC</li>
                    </SkillsItem>
                    <SkillsItem business='Stage IFAPME' place="SmartGoodies - Auvelais" date="10/2015 - 03/2016">
                        <li className="skills_details_item">Réparation Smartphone Android / IOS</li>
                        <li className="skills_details_item">Gestion de la caisse</li>
                        <li className="skills_details_item">Comptoir client</li>
                    </SkillsItem>
                    <SkillsItem business='Stage IFAPME' place="CEIN - Belgrade" date="08/2013 - 09/2015">
                        <li className="skills_details_item">Assemblage PC</li>
                        <li className="skills_details_item">Réparation hardware / software PC</li>
                        <li className="skills_details_item">Réapprovisionnement du stock</li>
                        <li className="skills_details_item">Comptoir client</li>
                    </SkillsItem>
                </ul>
            </div>
        </section>
    )
}

export default Skills