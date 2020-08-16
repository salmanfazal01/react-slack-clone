import React, {useState} from "react";
import './ChatInput.css';
import {Button} from "@material-ui/core";
import {useStateValue} from "../../store/StateProvider";
import db from "../../config/firebase";
import firebase from "firebase";

const ChatInput = ({channelName, channelId}) => {

    const [input, setInput] = useState('');
    const [state] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: state.user.displayName,
                userImage: state.user.photoURL

            })
        }
        setInput('')
    };

    return (
        <div className='chatInput'>
            <form>
                <input
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <Button type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
};

export default ChatInput;