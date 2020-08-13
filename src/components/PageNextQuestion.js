import React from 'react'

function PageNextQuestion(props) {
    const soup = props.id
    return (
            <button onClick={props.showNumber(soup)}>
                {props.id}
            </button>
    )
}


export default PageNextQuestion