import React, { useState } from 'react'

function Greeting() {
    const [user, setUser] = useState("");
    function inputHandle(e) {
        setUser(e.target.value);
    }

    return (
        <div>
            <label htmlFor='ip'>Enter your name:</label>
            <br />
            <input id='ip' type='text' onChange={inputHandle} />
            <p>{text && `Hello ${user}!`}</p>
        </div>
    )
}

export default Greeting