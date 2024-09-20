import React, { useState } from 'react'

function Greeting() {
    const [user, setUser] = useState("");
    const [show, setShow] = useState(false);
    function inputHandle(e)
    {
        setUser(e.target.value);
    }

    return (
        <div>
            <label htmlFor="name-input">Enter your name:</label>
            <br />
            <br />
            <input id='name-input' name='name' type='text' value={user} onChange={inputHandle} />
            <br />
            <p>{user && Hello {user}!}</p>
        </div>
    )
}

export default Greeting