import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { store } from "../store";
import { ModalsProvider } from "../provider/ModalsProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </Provider>
  );
}

export default MyApp;
