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
      .then(result => {
        this.setState({ products: result });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map(product => {
            return <ProductListItem key={product.productId} data={product} />;
          })
          }
        </div>
      </div>
    );
  }
}

export default ProductList;
