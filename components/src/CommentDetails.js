import React from 'react';

function getTime() {
    return (new Date()).toLocaleTimeString()
}

const CommentDetails = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.image}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                            <span className="date">
                                {getTime()}
                            </span>
                </div>
                <div> {props.post}</div>
            </div>
        </div>
    )
};

export default CommentDetails;