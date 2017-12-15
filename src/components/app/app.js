import React from 'react';
import {Header} from '../header/header';
import {Loader} from '../loader/loader';
import {Properties} from '../properties/properties';

export class App extends React.Component {
  componentWillMount() {
    this.props.getProperties();
  }

  render() {
    return (
      <div id='app' className='app'>
        <div className='wrapper'>
          <Header/>
          <div className='main-content container'>
            {
              this.props.isFetching
                ?
                <Loader/>
                :
                <Properties properties={this.props.properties}/>
            }
          </div>
        </div>
      </div>
    );
  }
}
