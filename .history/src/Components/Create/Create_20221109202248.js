import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  return (
    <div className="create">
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {""}
        <label>Blog Body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {""}
        <label>Blog Auther:</label>
        <select value={author} onChange={(e) => e.target.value}>
          <option value="amr">amr</option>
          <option value="john">john</option>
          <option value="mario">mario</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
