const Home = () => {
  const handleClick = () => {
    console.log("Hello ,Devs");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick()}>Click Me</button>
      <button>CLick Me Again</button>
    </div>
  );
};

export default Home;
