import { push, set,ref } from "firebase/database";
import { db } from ".";

export const writeData = (collection, data, unique) => {
  let dbyeQosulmusBudaq = ref(db, collection);

  let add = unique ? push : set;

  add(dbyeQosulmusBudaq, data);
};
