const Home = () => {
  const handleClick = (e) => {
    console.log(`Click me I'm ${e}`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick("Amr")}>CLick Me Again</button>
    </div>
  );
};

export default Home;
