import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  console.log(e.target);
  return (
    <div className="create">
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle()}
        />
        console.log(e.target)
        {""}
        <label>Blog Body:</label>
        <textarea type="text" required></textarea>
        {""}
        <label>Blog Auther:</label>
        <select>
          <option value="amr">amr</option>
          <option value="john">john</option>
          <option value="mario">mario</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
