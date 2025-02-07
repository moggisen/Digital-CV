import "../styles/Home.css";

function Home() {
  return (
    <div className="Home page">
      <section className="home">
        <div className="home-content">
          <h1>Hej, Mathilda här</h1>
          <p>FRONT-END STUDENT | KYH </p>
          <p>Webbutvecklare | Designer | Kreativ Tänkare</p>
          <p>Välkommen till mitt Digitala CV</p>
          <a href="/projects" className="btn">
            Se mina projekt
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
