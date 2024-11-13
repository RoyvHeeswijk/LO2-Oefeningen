import MyImage from "./plaatjeroyvh.jpg";

export default function Home() {
  return (
    <body>
      <div>
        <div>
           <header className="grid">
          <h1>0</h1>
          <nav>
            <a href="">About me</a>
            <a href="">Projects</a>
          </nav>
        </header>
        </div>   
        <main className="grid">
          <div className="welcome">
            <img src={MyImage} style={{ width: '100%', height: 'auto' }} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, cumque molestiae culpa nisi voluptatibus laudantium mollitia obcaecati omnis in, ea adipisci, deleniti praesentium? Similique aspernatur amet dolor illum, ea tempore animi laborum. Temporibus explicabo, omnis molestiae cum eos quidem officia.</p>
          </div>
          <h2>Services</h2>
          <div className="card">
            <h3>Hello.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, itaque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, itaque.</p>
          </div>
          <div className="card">
            <h3>Hello.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, itaque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, itaque.</p>
          </div>
          <div className="card">
            <h3>Hello.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, itaque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, itaque.</p>
          </div>
        </main>
      </div>
    </body>
  );
}
