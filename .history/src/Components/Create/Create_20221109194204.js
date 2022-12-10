const Create = () => {
  return (
    <div className="create">
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        {""}
        <textarea type="text" required></textarea>
        <label>Blog Body:</label>
        {""}
      </form>
    </div>
  );
};

export default Create;
