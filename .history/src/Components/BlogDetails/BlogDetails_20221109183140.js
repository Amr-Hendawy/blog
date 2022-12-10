import { useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(`http://localhost:8000/blogs`);
  return (
    <div className="blog-BlogDetails">
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
