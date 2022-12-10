const Home = () => {
  const name = "amr";
  function channgename() {
    const name = "Mera";
  }
  return (
    <div className="home">
      <h2 onClick={channgename}>{name}</h2>
      <button>CLick Me</button>
      <button>click me again</button>
    </div>
  );
};

export default Home;
