import { useRouter } from "next/router";




const ProductDetailed = () => {
  const route = useRouter();

  console.log(route);

  return (
    <>
      <h1>ProductDetailed page {route.query.id}</h1>;
      <button onClick={() => route.push("/")}> go home</button>
    </>
  );
};

export default ProductDetailed;

