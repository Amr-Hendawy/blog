import { useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  return (
    <div className="blog-BlogDetails">
      {isPending && <div>Loading ....</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default BlogDetails;
