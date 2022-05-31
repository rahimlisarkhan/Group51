import React from "react";
import cardStyle from "./card.module.css";

export class Card extends React.Component {
  render() {
    let inlineStyle = {
      width: "18rem",
    };

    let { title, desc, image_url } = this.props;

    return (
      <div
        className={`col-md-3 ${
          !this.props.color ? cardStyle.card_black : cardStyle.card_color
        } `}
      >
        <div className="card mb-5" style={inlineStyle}>
          <img src={image_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
