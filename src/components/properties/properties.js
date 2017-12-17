import React from 'react';

export class Properties extends React.Component {
  renderProperty(property, key) {
    return (
      <div className="col s12 m6 xl4" key={key}>
        <div className="card medium">
          <div className="card-image">
            <img src={property.image.url} alt={property.id}/>
            <span className='purpose'>{property.purpose}</span>
          </div>
          <div className="card-content">
            <p>{property.title}</p>
            <address className='address'>{property.address}</address>
          </div>
          <div className="card-action">
            <span className='col s4 price'>{property.price}</span>
            <span className='col s8 area right-align'>
              <span className='room'>{property.rooms}</span>
              <span className='spacer'>&nbsp;</span>
              <span className='a'>{property.area}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='properties row'>
        {
          this.props.properties.map((_, k) => this.renderProperty(_, k))
        }
      </div>
    );
  }
}
