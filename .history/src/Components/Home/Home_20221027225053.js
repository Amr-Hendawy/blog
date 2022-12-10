const Home = () => {
  const name = "amr";
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
