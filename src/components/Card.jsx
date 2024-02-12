import Styles from "./Card.module.css";

let Card = (props) => {
  return <div className={Styles.container}>{props.children}</div>;
};

export default Card;
