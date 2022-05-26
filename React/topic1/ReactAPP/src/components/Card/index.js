class Card extends React.Component {
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
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
