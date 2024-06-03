import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="header">
        <nav className="nav">
          <Link to="/" className="nav__title">Home</Link>
          <Link to="/user/:userId" className="nav__title">Dashboard</Link>
          <Link to="map" className="nav__toggle">
            <div className="nav__title">Explore Our Live Map!</div>
          </Link>
          <Link to="community" className="nav__title">Community Board</Link>
          <Link to="/user" className="nav__title">Login/Profile</Link>
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
