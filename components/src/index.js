import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";

import CommentDetails from './CommentDetails'
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails
                    image={faker.image.image()}
                    author={faker.name.findName()}
                    post={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    image={faker.image.image()}
                    author={faker.name.findName()}
                    post={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    image={faker.image.image()}
                    author={faker.name.findName()}
                    post={faker.lorem.sentence()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
