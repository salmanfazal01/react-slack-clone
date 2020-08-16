import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";

import db from "../../config/firebase";
import "./Chat.css";
import Message from "../Message/Message";
import ChatInput from './ChatInput';

const Chat = () => {
    const { roomid } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomid) {
            db.collection("rooms")
                .doc(roomid)
                .onSnapshot((snapshot) => {
                    console.log(snapshot.data());
                    setRoomDetails({...snapshot.data(), id: roomid});
                });

            db.collection("rooms")
                .doc(roomid)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => {
                    setRoomMessages(snapshot.docs.map((doc) => doc.data()));
                });
        }
    }, [roomid]);

    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails ? roomDetails.name : ""}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>

            <div className="chat_messages">
                {roomMessages.map(message => (
                    <Message
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userImage}
                    />
                ))}
            </div>
            {console.log(roomDetails)}
            <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id}/>
        </div>
    );
};

export default Chat;
