import { useMatch, useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  let navigate = useNavigate();
  console.log("match");

  return (
    <main>
      <h1>ProductDetail : {params.product_id}</h1>
      <button onClick={() => navigate("/product")}>product page</button>
    </main>
  );
};

// export default withRouter(ProductDetail)
export default ProductDetail;
