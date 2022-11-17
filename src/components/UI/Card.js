import style from "./Card.scss";

const Card = function (props) {
  return <div className={style.card}>{props.children}</div>;
};

export default Card;
