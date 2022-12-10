const Home = () => {
  const handleClick = (e) => {
    console.log("Hello ,Devs", e);
  };

  const handleMeAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleMeAgain("Mera");
        }}
      >
        CLick Me Again
      </button>
    </div>
  );
};

export default Home;
