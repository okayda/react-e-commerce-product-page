import ReactDOM from "react-dom";

const Modal = function (props) {
  return (
    <>
      {ReactDOM.createPortal(
        props.children,
        document.getElementById(props.targetContainer)
      )}
    </>
  );
};

export default Modal;
