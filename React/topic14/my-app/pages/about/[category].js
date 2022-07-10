import axios from "axios";
import Head from "next/head";
import useSWR from "swr";
import { getJokes } from "../../api/jokes";
import { useRouter } from "next/router";

const CategoryPage = () => {


  const route = useRouter();

  const { category } = route.query;

  console.log("route", route);

  const renderRestuarant = () => {
    switch (category) {
      case "meat":
        return <h1>Welcome Meat foods</h1>;
      case "fish":
        return <h1>Welcome Fish foods</h1>;
      default:
        return <h1>Welcome Restaurant</h1>;
    }
  };

  return (
    <>
      <Head>
        <title> Category App </title>
      </Head>
     <div>
      <h2>Category</h2>
        {renderRestuarant()}
     </div>

      
    </>
  );
};

export default CategoryPage;
