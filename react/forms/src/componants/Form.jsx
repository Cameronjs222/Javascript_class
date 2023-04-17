import React, { useState } from "react";

const Form = (props) => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        passwordConfirmationError: ""
    });

    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const submitHandler = (event) => {
        if (user.first_name.length < 2) {
            document.getElementById("invalid_first_name").style.display = "block";
            user.first_name = ""
        }
        if (user.last_name.length < 2) {
            document.getElementById("invalid_last_name").style.display = "block";
            user.last_name = ""
        }
        if (user.email.length < 2) {
            document.getElementById("invalid_email").style.display = "block";
            user.email = ""
        }
        if (user.passwordConfirmation !== user.password) {
            document.getElementById("invalid_password").style.display = "block";
            user.password = ""
        }
        event.preventDefault();
        const newUser = [user.first_name, user.last_name, user.email, user.password];
        console.log("Welcome", newUser);
    };

    const passwordReminder = (event) => {
        let index = event.target.value.length - 1;
        if (user.passwordConfirmation[index] !== event.target.value[index]) {
            document.getElementById("invalid_password").style.display = "block";
        }
        if (user.passwordConfirmation.includes(event.target.value)) {
            document.getElementById("invalid_password").style.display = "none";
        }
    };
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
            <div className="form_input">
            <label htmlFor="first_name">First name</label>
            <input name="first_name" type="text" onChange={changeHandler} onSubmit={submitHandler} />
            <span id="invalid_first_name" style={{display: "none"}}>name must be at least 2 characters long</span>
            </div>
            <div className="form_input">
            <label htmlFor="last_name">Last name</label>
            <input name="last_name" type="text" onChange={changeHandler} onSubmit={submitHandler} />
            <span id="invalid_last_name" style={{display: "none"}}>name must be at least 2 characters long</span>
            </div>
            <div className="form_input">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" onChange={changeHandler}/>
            <span id="invalid_email" style={{display: "none"}}>Email must be at least 2 characters long</span>
            </div>
            <div className="form_input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={changeHandler} />
            </div>
            <div className="form_input">
            <label htmlFor="passwordComfirmation">Confirm password</label>
            <input type="password" name="passwordConfirmation" onChange={(event) => {
                changeHandler(event);
                passwordReminder(event);
            }} />
            <span id="invalid_password" style={{display:"none"}}>Passwords must match</span>
            </div>
            <button type="submit">submit</button>
            </form>
            <div>
                <h2>Your form data</h2>
                <p>First name: {user.first_name}</p>
                <p>Last name: {user.last_name}</p>
                <p>Email: {user.email}</p>
                <p>password: {user.password}</p>
            </div>
        </div>
    )
}

export default Form