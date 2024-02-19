import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid p-0" style={{ backgroundColor: 'darkslategrey' }}>
          <div className="row no-gutters justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
            <div className="col-md-4">
              <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '15px' }}>
                <div className="card-body">
                  <h2 className="card-title">Login</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="loginEmail">Email address</label>
                      <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="loginPassword">Password</label>
                      <input type="password" className="form-control mb-3" id="loginPassword" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-success btn-block">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
