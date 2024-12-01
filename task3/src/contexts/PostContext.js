import React, { createContext, useState, useCallback } from 'react';
import { fetchPosts as fetchPostsFromAPI } from '../services/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPostsFromAPI();
      setPosts(data);
    } catch (err) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading, error, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};
