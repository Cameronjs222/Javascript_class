import React, { useState } from "react";

const Form = (props) => {
const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    passwordConfirmationError: ""
});

const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
};

const submitHandler = (event) => {
    if (user.username.length < 2) {
    document.getElementById("invalid_username").style.display = "block";
    user.username = ""
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
const newUser = [user.username, user.email, user.password];
console.log("Welcome", newUser);
};

const passwordReminder = (event) => {
    let index = event.target.value.length -1
    if (user.password[index] !== event.target.value[index]){
        document.getElementById("invalid_password").style.display = "block";
    }
    if(user.password.includes(event.target.value)){
        document.getElementById("invalid_password").style.display = "none";

    }
}
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
            <div className="form_input">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" onChange={changeHandler} onSubmit={submitHandler} />
            <span id="invalid_username" style={{display: "none"}}>Username must be at least 2 characters long</span>
            </div>
            <div className="form_input">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" onChange={changeHandler}/>
            <span id="invalid_email" style={{display: "none"}}>Email must be at least 2 characters long</span>
            </div>
            <div className="form_input">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={changeHandler} />
            </div>
            <div className="form_input">
            <label htmlFor="passwordComfirmation">Confirm password</label>
            <input type="text" name="passwordConfirmation" onChange={(event) => {
                changeHandler(event);
                passwordReminder(event);
            }} />
            <span id="invalid_password" style={{display:"none"}}>Passwords must match</span>
            </div>
            <button type="submit">submit</button>
            </form>
            <div>
                <h2>Your form data</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>password: {user.password}</p>
            </div>
        </div>
    )
}

export default Form