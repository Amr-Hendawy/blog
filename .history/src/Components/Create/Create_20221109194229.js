const Create = () => {
  return (
    <div className="create">
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        {""}
        <label>Blog Body:</label>
        <textarea type="text" required></textarea>
        {""}
        <label>Blog Auther:</label>
        <textarea type="text" required></textarea>
      </form>
    </div>
  );
};

export default Create;
