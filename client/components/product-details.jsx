import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.itemId}`)
      .then(response => response.json())
      .then(data => this.setState({ product: data }))
      .catch(error => {
        console.error('There was a problem with your fetch GET operation: ', error);
      });
  }

  handleClick() {
    this.props.setView('catalog', {});
  }

  render() {
    if (!this.state.product) return null;
    return (
      <div className="container">
        <div
          className="hover col-2 my-3 px-0 btn d-flex justify-content-start"
          onClick={this.handleClick}>
            &lt; Back to Catalog
          <i className="fas fa-book-open"></i>
        </div>
        <div className="d-flex justify-content-around">
          <div>
            <img src={this.state.product.image} />
          </div>
          <div>
            <h2>{this.state.product.name}</h2>
            <h3 className="text-muted">${(this.state.product.price / 100).toFixed(2)}</h3>
            <p>{this.state.product.shortDescription}</p>
          </div>
        </div>
        <div className="row center">
          <p className="detailbox">{this.state.product.longDescription}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
