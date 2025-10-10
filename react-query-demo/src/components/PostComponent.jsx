import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

function PostsComponent() {
  const [showPosts, setShowPosts] = useState(true);

  const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  };

  const { data, error, isLoading, isError, refetch } = useQuery("posts", fetchPosts, {
    staleTime: 60000,
    cacheTime: 300000,
  });

  if (!showPosts) return <button onClick={() => setShowPosts(true)}>Show Posts</button>;

  return (
    <div>
      <button onClick={() => setShowPosts(false)}>Hide Posts</button>
      <button onClick={() => refetch()} style={{ marginLeft: "10px" }}>Refetch Posts</button>

      {isLoading && <p>Loading posts...</p>}
      {isError && <p>Error: {error.message}</p>}

      <ul>
        {data && data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
