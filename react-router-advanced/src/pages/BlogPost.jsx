// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // dynamic route
  return <h2>Blog Post ID: {id}</h2>;
}

export default BlogPost;
