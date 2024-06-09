import "./ErrorMessage.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

export default function ErrorMessage({ message }) {
  return (
    <span className="error__msg">
      <img
        src={errorIcon}
        alt="red exclamation mark in circle"
        className="error__icon"
      />
      {message}
    </span>
  );
}
