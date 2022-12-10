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
        <select>
          <option value="amr">amr</option>
          <option value="john">john</option>
          <option value="mario"></option>
        </select>
      </form>
    </div>
  );
};

export default Create;
