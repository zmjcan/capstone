import "./PageNotFound.scss";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="notfound">
        <h2 className="notfound__title">
          What you're looking for is missing? No worries, return to our main
          page
        </h2>
        <Link to="/">
          <button className="notfound__button">RETURN</button>
        </Link>
      </div>
    </>
  );
}
