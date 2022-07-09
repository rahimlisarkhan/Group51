import { useState } from "react";

export const HomeContainer = ({ movies }) => {

    const [ state,setState] = useState(false)
  return (
    <div>
      {movies.map((item) => (
        <div>
          <img width={200} src={item.Poster} alt={item.Title} />
          <div> {item.Title}</div>
        </div>
      ))}
    </div>
  );
};
