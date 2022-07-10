import { Fragment } from "react";
import { Header } from "../../containers/Header/Header";
import { Container } from "react-bootstrap";


 const Layout  = (props) => {
    return (
      <Fragment>
        <Header />
        <main className="bg-dark" style={{ minHeight: "100vh" }}>
          <Container>{props.children}</Container>
        </main>
      </Fragment>
    );
}


export default Layout