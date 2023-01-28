import React from "react";
import Post from "./post"
import "./postRow.css"

const PostRow = (props) => {
    const { metadata = {} } = props;
    return (
        <div>
            <p className="header">{metadata.name}</p>
            <div className="post-row">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
export default PostRow;
