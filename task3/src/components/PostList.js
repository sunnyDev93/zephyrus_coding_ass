import React from 'react';
import PostCard from './PostCard';
import './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
