import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState([]);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="App">
      <button onClick={openModal}>Add vote</button>
      {modal && <Form onClose={closeModal} />}
    </div>
  );
}

export default App;
