import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className="blog-BlogDetails">
      <h2>Blog Details</h2>
    </div>
  );
};

export default BlogDetails;
