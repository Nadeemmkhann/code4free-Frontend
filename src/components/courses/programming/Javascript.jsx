import React from "react";
import VideoCard from "../VideoCard";

export default function Javascript(){
    return (
        <div>
            {console.log("inside Html component")}
            <VideoCard videoId="chx9Rs41W6g" />
            <VideoCard videoId="Llsq1y-HWs4" />
            <VideoCard videoId="pAl_uGXKXq8" />
        </div>
    )
}