import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const handleSumbit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    setIsPending(true);

    fetch("https://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Blog added");
      setIsPending(false);
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSumbit}>
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
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="amr">amr</option>
          <option value="john">john</option>
          <option value="mario">mario</option>
        </select>
        {<button>Add Blog</button>}
        {<button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
