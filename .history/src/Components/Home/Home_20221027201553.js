const Home = () => {
  const handleClick = (e) => {
    console.log(`Click me I'm`, e);
  };
  const clickMeAgain = () => {
    console.log(`Click me I'm`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick(`Amr')}>CLick Me </button>
      <button
        onClick={() => {
          clickMeAgain();
        }}
      >
        click me again
      </button>
    </div>
  );
};

export default Home;
