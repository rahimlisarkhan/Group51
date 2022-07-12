import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { HomeContainer } from "../feature/Home/containers/HomeContainer";
import { useEffect } from "react";
import { Header } from "../shared/container/Header";

export default function Home(props) {
  useEffect(() => {}, []);

  const getSearchMovie = (text) => {
    axios(`http://www.omdbapi.com/?apikey=a407a7b3&t=${text}`).then((res) => {
      console.log("res", res.data);
    });
  };

  console.log("props", props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        Salam
        <input onChange={(e) => getSearchMovie(e.target.value)} />
        <br />
        <img width={400} src="/maxresdefault.jpeg" />
        <Image width={400} height={400} placeholder src="/maxresdefault.jpeg" />
        <HomeContainer movies={props.movies} />
      </main>
    </div>
  );
}

// m.media-amazon.com

export const getServerSideProps = async () => {
  const response = await axios(
    "http://www.omdbapi.com/?apikey=a407a7b3&s=movie"
  );

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movies: response?.data?.Search,
    },
  };
};