const Home = () => {
  const handleClick = (e) => {
    console.log(`Click me I'm`, e);
  };
  const clickMeAgain = (e) => {
    console.log(`I'm ${e}`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>CLick Me </button>
      <button
        onClick={() => {
          clickMeAgain("Amr");
        }}
      >
        click me again
      </button>
    </div>
  );
};

export default Home;
