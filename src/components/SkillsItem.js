import React from 'react'

function SkillsItem(props) {
    return (
        <li className="skills_list-item">
            <h3 className="skills_place">{props.place}<span className="skills_date">{props.date}</span></h3>
            <ul className="skills_details">
                <h3 className="skills_business">{props.business}</h3>
                {props.children}
            </ul>
        </li>
    )
}

export default SkillsItem