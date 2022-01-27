import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" avatar={faker.image.avatar()} timeAgo="Today at 6:00PM"
          commentText={faker.lorem.sentences(2)}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" avatar={faker.image.avatar()}  timeAgo="Today at 4:00PM" 
          commentText={faker.lorem.sentences(2)}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" avatar={faker.image.avatar()}  timeAgo="Yesterday at 6:00PM" 
          commentText={faker.lorem.sentences(2)}/>
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.querySelector('#root')
);

