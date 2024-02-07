import React from "react";
import { Container, Card } from "react-bootstrap";
import product from "./product";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Psalmmy";

const App = () => {
  return (
    <Container>
      <Card style={{ marginTop: "2rem" }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image image={product.image} />
        </Card.Body>
      </Card>
      <p style={{ marginTop: "1rem" }}>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img src="http://www.w3.org/2000/svg/150" alt="Profile" style={{ marginTop: "1rem", maxWidth: "100px", borderRadius: "50%" }} />}
    </Container>
  );
};

export default App;
