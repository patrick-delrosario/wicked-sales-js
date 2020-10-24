import React from 'react';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setView('details', this.props.product.productId);
  }

  render() {
    const price = (this.props.product.price / 100).toFixed(2);
    return <>
      <div className="col-4 d-flex justify-content-around">
        <div className="card" onClick={this.handleClick}>
          <img src={this.props.product.image} className="card-img-top"></img>
          <div className="card-body">
            <h6 className="card-title">{this.props.product.name}</h6>
            <p className="card-subtitle mb-2 text-muted">${price}</p>
            <p className="card-text">{this.props.product.shortDescription}</p>
          </div>
        </div>
      </div>
    </>;
  }
}

export default ProductListItem;
