import React from 'react';

export default function Jokes (props) {
    return (
        <div>
            <div>
                <h3>{props.setup}</h3>
                <p>{props.punchline}</p>
                <hr/>
            </div>
        </div>
    )
}