import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// This sets the mock adapter on the default instance
export const AxiosMockCreate = new MockAdapter(axios);

export const Axios = axios

