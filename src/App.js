import { Button } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header/Header";
import Toast from "./components/Toast/Toast";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="mb-5">Hello Zihad</h1>
      <Toast
        message={`I love you 😍 baby. Will you marry me 💍??`}
        position="top-center"
      ></Toast>
    </div>
  );
}

export default App;
