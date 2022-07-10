import { useState } from "react";

import Image from "next/image"

export const HomeContainer = ({ movies }) => {

    const [ state,setState] = useState(false)
  return (
    <div>
      {movies.map((item) => (
        <div>
          {/* <img width={200} src={item.Poster} alt={item.Title} /> */}
          <Image width={200} height={300} src={item.Poster} alt={item.Title}/>
          <div> {item.Title}</div>
        </div>
      ))}
    </div>
  );
};
