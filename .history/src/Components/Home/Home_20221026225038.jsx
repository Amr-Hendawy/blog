const Home = () => {
  const handleClick = () => {
    console.log("Hello ,Devs");
  };

  const handleMeAgain = (name) => {
    console.log("hello" + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        CLick Me Again
      </button>
    </div>
  );
};

export default Home;
