import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import VoteList from "./Components/VoteList";
import { useVotes } from "./Components/VoteContext";

function App() {
  const [modal, setModal] = useState(false);
  const { totalVotes } = useVotes(); // Access totalVotes from context

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <div>{totalVotes}</div> {/* Display total votes */}
      <button onClick={openModal}>Add vote</button>
      {modal && <Form onClose={closeModal} />}
      <VoteList />
    </div>
  );
}

export default App;
