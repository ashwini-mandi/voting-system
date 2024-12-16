import Modal from "./Modal";

const Form = ({ onClose }) => {
  return (
    <>
      <Modal onClose={onClose}>
        <form>
          <input />
          <button onClick={onClose}>close</button>
        </form>
      </Modal>
    </>
  );
};

export default Form;
