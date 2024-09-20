import React, { useState } from 'react'

function Greeting() {
    const [user, setUser] = useState("");
    const [show, setShow] = useState(false);
    function inputHandle(e)
    {
        const value = e.target.value;
        setUser(value);
        if(value != "")
        {
            setShow(true);
            return;
        }
        setShow(false);
    }

    return (
        <div>
            <label htmlFor="name-input">Enter your name:</label>
            <br />
            <br />
            <input id='name-input' name='name' value={user} type="text" onChange={inputHandle} />
            <br />
            <div id='greeting-output'>
                {show && <p>Hello {user}!</p>}
            </div>
        </div>
    )
}

export default Greeting