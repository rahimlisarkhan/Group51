import axios from "axios";
import Head from "next/head";
import useSWR from "swr";
import { getJokes } from "../../api/jokes";
import { useRouter } from "next/router";

const AboutPage = () => {
  const { data } = useSWR(
    "https://icanhazdadjoke.com/search?limit=5",
    getJokes
  );

  const route = useRouter();

  const { rest, category } = route.query;

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
        <title> About App </title>
      </Head>
     <div>
      <h2>Category</h2>

      <ul>
          <li onClick={()=>route.push("about")}>All</li>
          <li onClick={()=>route.replace("?rest=burgerking&category=meat")}>Meat</li>
          <li onClick={()=>route.replace("?rest=burgerking&category=fish")}>Fish</li>
      </ul>
     </div>

      <h1>About page</h1>;{renderRestuarant()}
      
    </>
  );
};

export default AboutPage;
