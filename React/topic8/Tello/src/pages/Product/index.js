import { Component } from "react";
import { Link } from "react-router-dom";

export class ProductPage extends Component {
  render() {
    return (
      <main>
        <h1>ProductPage</h1>
        <div className="shadow" style={{ width: "18rem" }}>
          <img
            width={200}
            src="https://strgimgr.umico.az/originals/250969-3613c1ef21ed2df290d2b0abc379cf34.jpg"
            alt="test"
          />
          <p>Monitor E5</p>
          <Link to="/product/10" className="btn btn-primary btn-sm ">
            read me
          </Link>
        </div>
        <div className="shadow" style={{ width: "18rem" }}>
          <img
            width={200}
            src="https://strgimgr.umico.az/originals/250969-3613c1ef21ed2df290d2b0abc379cf34.jpg"
            alt="test"
          />
          <p>Monitor E5</p>
          <Link to="/product/11" className="btn btn-primary btn-sm ">
            read me
          </Link>
        </div>


        <div className="shadow" style={{ width: "18rem" }}>
          <img
            width={200}
            src="https://strgimgr.umico.az/originals/250969-3613c1ef21ed2df290d2b0abc379cf34.jpg"
            alt="test"
          />
          <p>Monitor E5</p>
          <Link to="/product/15" className="btn btn-primary btn-sm ">
            read me
          </Link>
        </div>

      </main>
    );
  }
}
