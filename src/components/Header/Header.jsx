import "./Header.scss";

export default function Header() {
  return (
    <>
      <section className="header">
        <nav className="nav">
          <div className="nav__title">Home</div>
          <div className="nav__title">Dashboard</div>
          <div className="nav__toggle">
            <div className="nav__title">Explore Our Live Map!</div>
          </div>
          <div className="nav__title">Community Board</div>
          <div className="nav__title">Login/Profile</div>
        </nav>
        <div className="quote-container">
          <section className="quote">
            <h1 className="quote__title">Bring every fluffy friend home.</h1>
            <h1 className="quote__title quote__title--light">
              Welcome to TailFinder.
            </h1>
          </section>
          <section>
            <img
              className="quote__logo"
              src="../../../src/assets/logos/tail-finder-logo-w.svg"
              alt="TailFinder Logo"
            />
          </section>
        </div>
      </section>
    </>
  );
}
