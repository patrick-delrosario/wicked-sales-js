import React from 'react';

class Header extends React.Component {
  render() {
    return <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="col-12">
            <i className="fas fa-dollar-sign"><h5>Wicked Sales</h5></i>
          </div>
        </nav>
      </header>
    </>;
  }
}

export default Header;
