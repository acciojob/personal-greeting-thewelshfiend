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
            <input id='name-input' name='name' type='text' value={user} type="text" onChange={inputHandle} />
            <br />
            {show && <p>Hello {user}!</p>}
        </div>
    )
}

export default Greeting