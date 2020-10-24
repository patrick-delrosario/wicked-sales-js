import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(result => result.json(result.rows))
      .then(result => { this.setState({ products: result }); })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const map = this.state.products.map(product =>
      <ProductListItem
        key={product.productId}
        product={product}
        setView={this.props.setView} />
    );
    return (
      <div className="container">
        <div className="row">
          {map}
        </div>
      </div>
    );
  }
}

export default ProductList;
