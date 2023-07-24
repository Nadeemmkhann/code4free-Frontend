import React from "react";
import VideoCard from "../VideoCard";

export default function NodeJs(){
    return (
        <div>
            {console.log("inside Html component")}
            <VideoCard videoId="BSO9C8Z-YV8" />
        </div>
    )
}