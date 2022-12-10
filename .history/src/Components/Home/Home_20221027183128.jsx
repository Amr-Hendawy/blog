const Home = () => {
  const handleClick = () => {
    console.log("Click me");
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>CLick Me Again</button>
    </div>
  );
};

export default Home;
