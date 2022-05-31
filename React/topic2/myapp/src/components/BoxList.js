import React from "react"
import { Card } from "./Card";
import PropTypes from 'prop-types';


export class BoxList extends React.Component {
  render() {
    // let arr = [1, 2, 3, 4,5];

    let { products } = this.props
    
    return (
      <div className="row mt-5">
          {products.map(item=> <Card key={`card-products-id-${item.id}`}  {...item} />)}
      </div>
    );
  }
}

BoxList.propTypes = {
  products: PropTypes.array
}
