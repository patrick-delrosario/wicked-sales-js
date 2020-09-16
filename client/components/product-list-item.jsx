import React from 'react';

class ProductListItem extends React.Component {
  render() {
    const price = (this.props.data.price / 100).toFixed(2);
    return <>
      <div className="col-4 d-flex justify-content-center">
        <div className="card" style={{ width: '18rem' }}>
          <img src={this.props.data.image} className="card-img-top"></img>
          <div className="card-body">
            <h6 className="card-title">{this.props.data.name}</h6>
            <p className="card-subtitle mb-2 text-muted">${price}</p>
            <p className="card-text">{this.props.data.shortDescription}</p>
          </div>
        </div>
      </div>
    </>;
  }
}

export default ProductListItem;
