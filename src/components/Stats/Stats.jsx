import "./Stats.scss";

export default function Stats({title, number, info}) {
  return (
    <>
      <section className="stats">
        <section className="stats__title">
          <h4 className="stats__title-key">{title}</h4>
          <h2 className="stats__title-value">{number}</h2>
        </section>
        <p className="stats__info">
          {info}
        </p>
      </section>
    </>
  );
}
