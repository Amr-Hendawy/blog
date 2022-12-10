import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="create">
      <form>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={() => setTitle()} />
        console.log(input.target)
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
