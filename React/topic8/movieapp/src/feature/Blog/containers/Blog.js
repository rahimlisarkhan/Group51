import { useEffect, useState } from "react";
import { actorsAPI, actorsCreateAPI, actorsDeleteAPI } from "../../../api/blog";

export const Blog = () => {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getActors();
  }, []);

  const getActors = () => {
    actorsAPI
      .then((res) => {
        console.log('"res', res);
        setActors(res.data.actors);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  console.log("actors", actors);

  const deleteActor = (id) => {
    actorsDeleteAPI(id)
      .then((res) => {
        console.log("res", res);

        let newArray = [...actors].filter((actor) => actor.id !== id);

        setActors(newArray);
      })
      .catch(() => {});
  };

  const addActor = (item) => {
    actorsCreateAPI(item)
      .then((res) => {
        console.log("res", res);

        let newArray = [...actors, item];

        setActors(newArray);
      })
      .catch(() => {});
  };

  if (!actors) {
    return <h1 className="text-white h5">Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-white">Blog Actors</h1>;
      <button
        onClick={() =>
          addActor({
            id: 169,
            name: "Arnold",
            surname: "Sw",
            age: 72,
            image_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/A._Schwarzenegger.jpg/1200px-A._Schwarzenegger.jpg",
            movies: ["Home alone", "Vampire"],
          })
        }
        className="btn btn-warning"
      >
        Add Actor
      </button>
      <div className="d-flex flex-wrap p-4">
        {actors?.map((actor, index) => {
          return (
            <div className="m-4 shadow" key={`actors-id:${index}`}>
              <img
                src={actor.image_url}
                style={{ objectFit: "cover" }}
                width={250}
                height={250}
                alt={actor.surname}
              />
              <div className="h4 text-white my-2">
                {" "}
                {actor.name} {actor.surname}
              </div>
              <button
                onClick={() => deleteActor(actor.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
