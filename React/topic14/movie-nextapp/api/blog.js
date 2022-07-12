// import axios from "axios";
import { Axios, AxiosMockCreate } from "../mocks";
import actorsData from "../mocks/actors/actors.json";

// AxiosMockCreate.onGet("/actors").reply(200, {
//   actors: actorsData,
// });

AxiosMockCreate.onGet("/actors").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { actors: actorsData }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/actors").reply((config) => {
  console.log("config", config);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/actors\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});







export const actorsAPI = Axios.get("/actors");
export const actorsDeleteAPI = (id) => Axios.delete(`/actors/${id}`);
export const actorsCreateAPI = (item) => Axios.post(`/actors`, item);

// export const actorsDeleteAPI = (id) => axios.delete(`http:/www.omdbapi.com/actors/?apikey=a407a7b3&${id}`);

//   export const actorsAPI = axios.get(
//     "http://www.omdbapi.com/?apikey=a407a7b3&/actors"
//    );
