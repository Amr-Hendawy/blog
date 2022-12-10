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
          <option value="amr"></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </form>
    </div>
  );
};

export default Create;
