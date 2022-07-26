import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Spinner } from "react-bootstrap";

import OutputMobile from "./component/outputMobile";
import OutputDesktop from "./component/outputDesktop";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [data, setData] = useState([]);
  async function getData() {
    await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        setData(json);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data.length) return <Spinner animation="border" />;

  return (
    <div className="App">
    <h1>Ponch Castor's JSON Output</h1>
      <Container id="body">
      
        <OutputDesktop data={data} isHidden={!isDesktopOrLaptop} /> :
        <OutputMobile data={data} isHidden={isDesktopOrLaptop}/>
      </Container>
    </div>
  );
}

export default App;
