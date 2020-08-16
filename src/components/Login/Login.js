import React from 'react';
import {auth, provider} from "../../config/firebase";
import {Button} from "@material-ui/core";
import './Login.css'
import {useStateValue} from "../../store/StateProvider";
import {actionTypes} from "../../store/reducer";

const Login = () => {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({type: actionTypes.SET_USER, user: result.user})
        }).catch(err => {
            alert(err.message)
        })
    };

    return (
        <div className='login'>
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
                <h1>Sign in to the Slack clone</h1>
                <p>salmanfazal01@gmail.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
};

export default Login;