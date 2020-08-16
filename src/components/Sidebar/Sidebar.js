import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import {
    Add,
    Apps,
    BookmarkBorder,
    Drafts,
    ExpandLess,
    FileCopy,
    Inbox,
    InsertComment,
    PeopleAlt,
    ExpandMore,
} from "@material-ui/icons";

import "./Sidebar.css";
import SidebarOption from "../SidebarOption/sidebarOption";
import db from "../../config/firebase";
import {useStateValue} from "../../store/StateProvider";

const Sidebar = () => {

    const [channels, setChannels] = useState([]);
    const [state] = useStateValue();

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) =>
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        );
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {state.user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertComment} title={"Threads"} />
            <SidebarOption Icon={Inbox} title={"Mentions & reactions"} />
            <SidebarOption Icon={Drafts} title={"Saved items"} />
            <SidebarOption Icon={BookmarkBorder} title={"Channel browser"} />
            <SidebarOption Icon={PeopleAlt} title={"People & user groups"} />
            <SidebarOption Icon={Apps} title={"Apps"} />
            <SidebarOption Icon={FileCopy} title={"File browser"} />
            <SidebarOption Icon={ExpandLess} title={"Show less"} />

            <hr/>

            <SidebarOption Icon={Add} title={"Add Channel"} addChannelOption />

            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
            ))}
        </div>
    );
};

export default Sidebar;
