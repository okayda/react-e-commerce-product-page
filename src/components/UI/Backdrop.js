import "./Backdrop.css";

const Backdrop = function (props) {
  return (
    <div
      className={`backdrop ${props.addClass ? props.addClass : ""}`}
      onClick={props.onHide}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
