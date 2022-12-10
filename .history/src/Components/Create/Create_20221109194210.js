const Create = () => {
  return (
    <div className="create">
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        {""}
        <textarea type="text" required></textarea>
        <label>Blog Auother:</label>
        {""}
      </form>
    </div>
  );
};

export default Create;
