import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Landing Page</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="public/static/css/styles.css" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">My Website</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="card text-center">
            <div className="card-body">
              <img src="public/static/img/your-image.svg" className="img-fluid" alt="Sample Image" />
              <h1 className="card-title">Welcome to My Website</h1>
              <p className="card-text">Your go-to place for information.</p>
              <div className="frame">
                <a href="https://www.youtube.com/@FluxxSet" className="fa fa-youtube-play "></a>
                <a href="https://github.com/FluxxSet" className="fa fa-github"></a>
                <a href="https://fluxxset.com/" className="fa fa-globe"></a>
              </div>
              <a href="about.html" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <script src="public/static/js/script.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.1/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}

export default App;
