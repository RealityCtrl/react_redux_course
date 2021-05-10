import React from 'react';

const commentDetail = () => {
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={faker.image.avatar()}/>
    </a>
    <div className="content">
      <a href="/">
        Sam
      </a>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
      </div>
      <div className="text">Nice Blog post!</div>
    </div>
  </div>
}