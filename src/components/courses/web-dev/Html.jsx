import React from "react";
import VideoCard from "../VideoCard";

export default function Html(){
    return (
        <div>
            {console.log("inside Html component")}
            <VideoCard videoId="kUMe1FH4CHE" />
        </div>
    )
}