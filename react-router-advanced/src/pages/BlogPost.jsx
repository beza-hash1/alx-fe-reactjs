import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // dynamic param
  return <h2>Blog Post ID: {id}</h2>;
}

export default BlogPost;
