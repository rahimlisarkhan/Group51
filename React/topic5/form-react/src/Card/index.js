import React from "react";

export class Card extends React.Component {
  render() {
    let inlineStyle = {
      width: "18rem",
    };

    return (
      <div className="col-md-3">
        <div className="card mb-5" style={inlineStyle}>
          <img
            src="https://images.samsung.com/is/image/samsung/ru-ur55-lu28r550uqixci-frontblack-205854114?$720_576_PNG$"
            class="card-img-top"
            alt="..."
          />

          {this.props.children}
        </div>
      </div>
    );
  }
}
