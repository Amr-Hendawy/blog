const Create = () => {
  return (
    <div className="create">
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        {""}
        <label>Blog Body:</label>
        <input type="text" required />
      </form>
    </div>
  );
};

export default Create;
