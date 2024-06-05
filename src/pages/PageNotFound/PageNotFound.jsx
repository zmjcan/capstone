import "./PageNotFound.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function PageNotFound() {
  return (
    <>
      <div className="notfound">
        <h2 className="notfound__title">
          What you're looking for is missing? No worries, return to our home
          page by clicking the button below:
        </h2>
        <Link to="/">
          <Button buttonType="submit" buttonText="Return"/>
        </Link>
      </div>
    </>
  );
}
