import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <nav className='top-nav light-blue darken-4'>
          <div className='container'>
            <div className='nav-wrapper'>
              <a className='page-title' href='/'>McMakler Properties</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
