import "./Button.scss"

export default function Button({buttonType, buttonText}) {
  return (
    <button type={buttonType} className="button-blank">{buttonText}</button>
  )
}
