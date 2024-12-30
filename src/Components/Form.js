import React, { useContext, useState } from "react";
import Modal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useVotes } from "./VoteContext";

const Form = ({ onClose }) => {
  const [studentName, setStudentName] = useState("");
  const [monitor, setMonitor] = useState("");
  const options = ["suresh", "deepak", "vinut"];

  const { addVote } = useVotes();
  const handleVote = (e) => {
    e.preventDefault();
    console.log("Student Name:", studentName);
    console.log("Monitor Selected:", monitor);
    if (studentName && monitor) {
      addVote(monitor, studentName);
      setStudentName("");
      setMonitor("");
      onClose(); // Close the form after voting
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form className="p-4 bg-light rounded shadow">
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="monitor" className="form-label">
            Choose Monitor
          </label>
          <select
            id="monitor"
            name="monitor"
            value={monitor}
            onChange={(e) => setMonitor(e.target.value)}
            className="form-select"
          >
            <option value="" disabled>
              Select a monitor
            </option>
            {options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            onClick={handleVote}
            type="submit"
          >
            Vote
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleClose}
            type="button"
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
