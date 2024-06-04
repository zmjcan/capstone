import "./Button.scss";

export default function Button({
  typeofButton,
  imageSrc,
  className,
  buttonText,
  onClickType,
  imgAlt,
}) {
  return (
    <button type={typeofButton} className={className} onClick={onClickType}>
      {imageSrc && (
        <img className="button__image" src={imageSrc} alt={imgAlt} />
      )}
      <p className="button__text">{buttonText}</p>
    </button>
  );
}
