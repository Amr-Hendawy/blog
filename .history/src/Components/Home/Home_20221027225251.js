const Home = () => {
  const name = "amr";
  function channgename() {
    const name = "Mera";
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
