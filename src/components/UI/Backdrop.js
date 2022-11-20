import "./Backdrop.css";

const Backdrop = function (props) {
  return (
    <div className="backdrop" onClick={props.onHide}>
      {props.children}
    </div>
  );
};

export default Backdrop;
