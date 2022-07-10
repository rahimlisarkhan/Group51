import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {Provider} from "react-redux"
import { store} from "../store"
import { ModalProvider } from "../provider/ModalsProvider"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <ModalProvider> */}
        <Component {...pageProps} />
      {/* </ModalProvider> */}
    </Provider>
  );
}

export default MyApp;
