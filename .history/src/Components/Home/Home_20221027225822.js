const Home = () => {
  let name = "amr";
  function channgename() {
    name = "Mera";
    console.log(name);
  }
  return (
    <div className="home">
      <h2>{name}</h2>
      <button onClick={channgename}>CLick Me</button>
      <button>click me again</button>
    </div>
  );
};

export default Home;
