import Txtbox from "./Txtbox";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./App.css";
function App() {
  const [img, setImg] = useState();
  const [num, setNum] = useState(1);

  const [array, setArray] = useState([]);

  useEffect(() => {
    async function url() {
      await fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => {
          setImg(data);
        });
    }
    url();
  }, []);

  return (
    <div style={{ display: "grid", placeContent: "center", padding: "10px" }}>
      <img
        style={{ height: "500px" }}
        src={img?.data.memes[num].url}
        alt={"Hello"}
      ></img>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {num != 1 && (
          <Button
            variant="dark"
            style={{ padding: "20px", margin: "20px" }}
            onClick={() => {
              setNum(num - 1);
              setArray([]);
            }}
          >
            Previous Meme
          </Button>
        )}
        {num != img?.data.memes.length - 1 && (
          <Button
            variant="dark"
            style={{ padding: "20px", margin: "20px" }}
            onClick={() => {
              setNum(num + 1);
              setArray([]);
            }}
          >
            Next Meme
          </Button>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="dark"
          onClick={() => {
            setArray([...array, array.length + 1]);
          }}
        >
          Add Text Box
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            setArray(() => {
              const filterArray = array.filter((e) => e !== array.length);

              setArray(filterArray);
            });
          }}
        >
          Delete Text Box
        </Button>
      </div>

      {array?.map((value) => (
        <Txtbox key={value} />
      ))}
    </div>
  );
}

export default App;
