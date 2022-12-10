import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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
        <textarea type="text" required value={body}></textarea>
        {""}
        <label>Blog Auther:</label>
        <select>
          <option value="amr">amr</option>
          <option value="john">john</option>
          <option value="mario">mario</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
      </form>
    </div>
  );
};

export default Create;
