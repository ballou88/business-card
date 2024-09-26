import "./App.css";
import headshot from "./assets/mike.jpeg";

function App() {
  return (
    <>
      <main>
        <img src={headshot} className="headshot" />
        <h1 className="name">Mike Ballou</h1>
        <h3 className="title">Software Engineer</h3>
        <a href="http://ballou.dev" className="website">
          ballou.dev
        </a>
        <div className="contact">
          <a href="mailto:mike@ballou.dev">
            <button className="btn fa-envelope">Email</button>
          </a>
        </div>
        <div className="about">
          <h3>About</h3>
          <p>
            Highly skilled Software Engineer with 15 years of experience in
            backend and full-stack development, including 6 years in leadership
            roles. Proven expertise in developing robust, scalable systems, and
            optimizing performance.
          </p>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <p>
            Father. Foodie. Reader. Home Hacker. Tech nut. Coffee fanatic. Music
            lover. Golfer. Soccer aficionado.
          </p>
        </div>
        <footer>
          <a href="https://github.com/ballou88" className="github"></a>
          <a href="https://linkedin.com/in/mikeballou" className="linkedin"></a>
        </footer>
      </main>
    </>
  );
}

export default App;
