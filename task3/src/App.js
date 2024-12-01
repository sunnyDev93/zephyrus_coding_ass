import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import ErrorBoundary from './components/ErrorBoundary';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>
  );
}

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Task Management</h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <ErrorBoundary>
          <PostList posts={filteredPosts} />
        </ErrorBoundary>
      )}
    </div>
  );
}

export default App;
