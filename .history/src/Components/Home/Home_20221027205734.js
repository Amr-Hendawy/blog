const Home = () => {
  const handleClick = (e) => {
    console.log(`Click me I'm`, e);
  };
  const clickMeAgain = (e, m) => {
    console.log(`I'm ${e}`, m.target.disabled);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>CLick Me </button>
      <button
        onClick={(m) => {
          clickMeAgain("Amr", m);
        }}
      >
        click me again
      </button>
    </div>
  );
};

export default Home;
